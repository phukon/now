import type { Meta, StoryObj } from '@storybook/react';
import MonthCard from '@components/calendar/month/month-card'

const meta = {
  title: 'Calendar',
  component: MonthCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MonthCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const light: Story = {};
