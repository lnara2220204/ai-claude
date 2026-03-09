import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import Button from '@/components/button/button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
\`Button\` 컴포넌트는 사용자의 액션을 트리거하는 기본 UI 요소입니다.

## 사용법

\`\`\`tsx
import Button from '@/components/button/button';

<Button variant="primary" size="md" onClick={() => alert('clicked!')}>
  클릭
</Button>
\`\`\`

## Props

| Prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| \`variant\` | \`primary \\| secondary \\| ghost\` | \`primary\` | 버튼 스타일 |
| \`size\` | \`sm \\| md \\| lg\` | \`md\` | 버튼 크기 |
| \`disabled\` | \`boolean\` | \`false\` | 비활성화 여부 |
| \`onClick\` | \`MouseEventHandler\` | - | 클릭 이벤트 핸들러 |
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      description: '버튼 스타일 변형',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '버튼 크기',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: '버튼 내용',
    },
    onClick: {
      description: '클릭 이벤트 핸들러',
    },
  },
  args: {
    onClick: fn(),
    children: '버튼',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Variant ---

export const Primary: Story = {
  name: 'Variant / Primary',
  args: {
    variant: 'primary',
    children: 'Primary 버튼',
  },
  parameters: {
    docs: {
      description: {
        story: '기본 강조 버튼입니다. 페이지에서 가장 중요한 액션에 사용합니다.',
      },
    },
  },
};

export const Secondary: Story = {
  name: 'Variant / Secondary',
  args: {
    variant: 'secondary',
    children: 'Secondary 버튼',
  },
  parameters: {
    docs: {
      description: {
        story: '보조 버튼입니다. Primary 버튼과 함께 사용하거나 덜 중요한 액션에 사용합니다.',
      },
    },
  },
};

export const Ghost: Story = {
  name: 'Variant / Ghost',
  args: {
    variant: 'ghost',
    children: 'Ghost 버튼',
  },
  parameters: {
    docs: {
      description: {
        story: '배경이 없는 버튼입니다. 목록 내 인라인 액션이나 툴바에 사용합니다.',
      },
    },
  },
};

// --- Size ---

export const Small: Story = {
  name: 'Size / Small',
  args: {
    size: 'sm',
    children: 'Small 버튼',
  },
  parameters: {
    docs: {
      description: {
        story: '작은 크기(32px)의 버튼입니다. 공간이 좁은 영역이나 보조 액션에 사용합니다.',
      },
    },
  },
};

export const Medium: Story = {
  name: 'Size / Medium',
  args: {
    size: 'md',
    children: 'Medium 버튼',
  },
  parameters: {
    docs: {
      description: {
        story: '기본 크기(40px)의 버튼입니다.',
      },
    },
  },
};

export const Large: Story = {
  name: 'Size / Large',
  args: {
    size: 'lg',
    children: 'Large 버튼',
  },
  parameters: {
    docs: {
      description: {
        story: '큰 크기(48px)의 버튼입니다. 히어로 영역이나 주요 CTA에 사용합니다.',
      },
    },
  },
};

// --- State ---

export const Disabled: Story = {
  name: 'State / Disabled',
  args: {
    disabled: true,
    children: '비활성 버튼',
  },
  parameters: {
    docs: {
      description: {
        story: '비활성화 상태의 버튼입니다. 클릭 이벤트가 발생하지 않습니다.',
      },
    },
  },
};

// --- All Variants ---

export const AllVariants: Story = {
  name: 'Overview / All Variants',
  parameters: {
    docs: {
      description: {
        story: '모든 variant를 한눈에 비교합니다.',
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="ghost">Ghost</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  name: 'Overview / All Sizes',
  parameters: {
    docs: {
      description: {
        story: '모든 size를 한눈에 비교합니다.',
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};
