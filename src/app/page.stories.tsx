import type { Meta, StoryObj } from '@storybook/react';
import lol from '@/app/page';

const meta = {
  title: 'Example/lol',
  component: lol,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof lol>;

export default meta;
type Story = StoryObj<typeof meta>;

export const lolo: Story = {};
