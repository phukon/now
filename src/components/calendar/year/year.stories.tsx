import type { Meta, StoryObj } from "@storybook/react";
import Year from "@components/calendar/year/year";

const meta = {
  title: "Calendar/year",
  component: Year,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Year>;

export default meta;
type Story = StoryObj<typeof meta>;

export const light: Story = {
  // args: {
  //   month: "April",
  //   color: "bg-blue-400",
  //   body: "Semper feugiat nibh sed pulvinar proin gravida hendrerit. Venenatis tellus in metus vulputate eu. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Eget nullam non nisi est sit amet facilisis. Eget egestas purus viverra accumsan in nisl. Orci porta non pulvinar neque.",
  // },
};
