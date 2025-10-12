import { Title } from '@dimcheify/tiny-kit';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Example/Title',
  component: Title,
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'I am a Title',
  },
};
