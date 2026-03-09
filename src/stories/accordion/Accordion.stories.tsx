import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Accordion from '@/components/accordion/accordion';

const defaultItems = [
  {
    id: '1',
    title: 'Accordion이란 무엇인가요?',
    content: 'Accordion은 콘텐츠를 접고 펼칠 수 있는 UI 컴포넌트입니다. 많은 양의 정보를 제한된 공간에 효율적으로 표시할 때 사용합니다.',
  },
  {
    id: '2',
    title: '언제 Accordion을 사용하나요?',
    content: 'FAQ, 설정 페이지, 긴 문서의 목차 등 사용자가 관심 있는 항목만 선택적으로 확인하고 싶을 때 적합합니다.',
  },
  {
    id: '3',
    title: '접근성은 어떻게 처리되나요?',
    content: 'aria-expanded, aria-hidden, aria-disabled 속성을 통해 스크린 리더 사용자도 올바르게 인식할 수 있도록 구현되어 있습니다.',
  },
];

const itemsWithDisabled = [
  ...defaultItems,
  {
    id: '4',
    title: '비활성화된 항목입니다.',
    content: '이 내용은 보이지 않습니다.',
    disabled: true,
  },
];

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
\`Accordion\` 컴포넌트는 콘텐츠를 접고 펼칠 수 있는 UI 요소입니다.

## 사용법

\`\`\`tsx
import Accordion from '@/components/accordion/accordion';

const items = [
  { id: '1', title: '질문 1', content: '답변 1' },
  { id: '2', title: '질문 2', content: '답변 2' },
];

<Accordion items={items} />
\`\`\`

## Props

| Prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| \`items\` | \`AccordionItem[]\` | - | 아코디언 항목 배열 |
| \`variant\` | \`default \\| bordered \\| filled\` | \`default\` | 스타일 변형 |
| \`multiple\` | \`boolean\` | \`false\` | 여러 항목 동시 열기 허용 |
| \`defaultOpenIds\` | \`string[]\` | \`[]\` | 초기 열린 항목 id 배열 |

### AccordionItem

| 필드 | 타입 | 설명 |
|------|------|------|
| \`id\` | \`string\` | 고유 식별자 |
| \`title\` | \`string\` | 헤더 텍스트 |
| \`content\` | \`ReactNode\` | 펼쳐질 내용 |
| \`disabled\` | \`boolean\` | 항목 비활성화 |
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'filled'],
      description: '아코디언 스타일 변형',
      table: { defaultValue: { summary: 'default' } },
    },
    multiple: {
      control: 'boolean',
      description: '여러 항목을 동시에 열 수 있는지 여부',
      table: { defaultValue: { summary: 'false' } },
    },
    defaultOpenIds: {
      control: 'object',
      description: '초기에 열려있을 항목의 id 배열',
      table: { defaultValue: { summary: '[]' } },
    },
  },
  args: {
    items: defaultItems,
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Variant ---

export const Default: Story = {
  name: 'Variant / Default',
  args: {
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: '기본 스타일입니다. 하단 구분선으로 항목을 구분합니다.',
      },
    },
  },
};

export const Bordered: Story = {
  name: 'Variant / Bordered',
  args: {
    variant: 'bordered',
  },
  parameters: {
    docs: {
      description: {
        story: '각 항목에 테두리와 둥근 모서리가 적용된 스타일입니다.',
      },
    },
  },
};

export const Filled: Story = {
  name: 'Variant / Filled',
  args: {
    variant: 'filled',
  },
  parameters: {
    docs: {
      description: {
        story: '배경색이 채워진 스타일입니다. 열린 항목은 파란 계열 배경으로 강조됩니다.',
      },
    },
  },
};

// --- 동작 방식 ---

export const SingleOpen: Story = {
  name: 'Behavior / Single (기본)',
  args: {
    variant: 'bordered',
    multiple: false,
  },
  parameters: {
    docs: {
      description: {
        story: '한 번에 하나의 항목만 열립니다. 다른 항목을 클릭하면 이전 항목이 닫힙니다.',
      },
    },
  },
};

export const MultipleOpen: Story = {
  name: 'Behavior / Multiple',
  args: {
    variant: 'bordered',
    multiple: true,
  },
  parameters: {
    docs: {
      description: {
        story: '`multiple` prop을 사용하면 여러 항목을 동시에 열 수 있습니다.',
      },
    },
  },
};

// --- State ---

export const DefaultOpen: Story = {
  name: 'State / Default Open',
  args: {
    variant: 'bordered',
    defaultOpenIds: ['1', '3'],
    multiple: true,
  },
  parameters: {
    docs: {
      description: {
        story: '`defaultOpenIds`로 초기 열린 항목을 지정합니다.',
      },
    },
  },
};

export const WithDisabled: Story = {
  name: 'State / Disabled Item',
  args: {
    variant: 'bordered',
    items: itemsWithDisabled,
  },
  parameters: {
    docs: {
      description: {
        story: '개별 항목에 `disabled: true`를 설정하면 해당 항목을 비활성화할 수 있습니다.',
      },
    },
  },
};

// --- Overview ---

export const AllVariants: Story = {
  name: 'Overview / All Variants',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '모든 variant를 한눈에 비교합니다.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '560px' }}>
      {(['default', 'bordered', 'filled'] as const).map((variant) => (
        <div key={variant}>
          <p style={{ fontSize: 12, color: '#9ca3af', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {variant}
          </p>
          <Accordion items={defaultItems} variant={variant} />
        </div>
      ))}
    </div>
  ),
};
