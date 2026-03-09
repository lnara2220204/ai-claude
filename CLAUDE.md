# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Next.js dev server
pnpm build            # Next.js production build
pnpm storybook        # Storybook dev server (port 6006)
pnpm build-storybook  # Storybook production build
```

## Architecture

This is a **Design System** project built with Next.js 16 (App Router), TypeScript, and SCSS Modules.

### Component Convention

Every component follows this structure — no exceptions:

```
src/
├── components/
│   └── <component>/
│       ├── <component>.tsx
│       └── <component>.module.scss
└── stories/
    └── <component>/
        └── <Component>.stories.tsx
```

When creating a new component:
1. Create `src/components/<component>/` with `.tsx` + `.module.scss`
2. Create `src/stories/<component>/` with a matching `.stories.tsx`

### Key Conventions

- **Package manager**: pnpm only
- **Path alias**: `@/*` maps to `src/*`
- **Class merging**: Use `classnames` (`cn`) for all conditional className logic
- **Styling**: SCSS Modules only — no Tailwind, no inline styles, no global class overrides
- **Interactive components**: Add `'use client'` directive when using React state/effects

### Storybook Story Structure

Stories are organized by category within each component:

- `Variant /` — different visual styles
- `Behavior /` — different interaction modes
- `State /` — disabled, loading, error, etc.
- `Overview /` — side-by-side comparisons

Each story file uses `autodocs` tag and includes Korean descriptions per story. The Storybook framework is `@storybook/nextjs-vite`.
