'use client';

import { useState } from 'react';
import cn from 'classnames';
import styles from './accordion.module.scss';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

type AccordionVariant = 'default' | 'bordered' | 'filled';

interface AccordionProps {
  items: AccordionItem[];
  variant?: AccordionVariant;
  multiple?: boolean;
  defaultOpenIds?: string[];
  className?: string;
}

export default function Accordion({
  items,
  variant = 'default',
  multiple = false,
  defaultOpenIds = [],
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  const toggle = (id: string) => {
    if (multiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn(styles.accordion, styles[variant], className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className={cn(styles.item, {
              [styles.open]: isOpen,
              [styles.disabled]: item.disabled,
            })}
          >
            <button
              className={styles.trigger}
              onClick={() => !item.disabled && toggle(item.id)}
              aria-expanded={isOpen}
              aria-disabled={item.disabled}
              disabled={item.disabled}
            >
              <span className={styles.title}>{item.title}</span>
              <span className={styles.icon} aria-hidden>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 6l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div className={styles.panel} aria-hidden={!isOpen}>
              <div className={styles.content}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
