import type { Meta, StoryObj } from '@storybook/react-vite';
import {Button} from "@dimcheify/tiny-kit";

const meta = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'outlined', 'contained'],
      control: { type: 'select' },
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: {type: 'select'}
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Кнопка',
    loading: false,
    loadingProps: <div>Loading</div>,
    fullWidth: false
  },
};
