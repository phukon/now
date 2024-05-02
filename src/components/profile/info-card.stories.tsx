import type { Meta, StoryObj } from "@storybook/react";
import InfoCard from "@components/profile/info-card";

const meta = {
  title: "Profile/info",
  component: InfoCard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const light: Story = {
  // args: {
  //   month: "April",
  //   color: "bg-blue-400",
  //   body: "Semper feugiat nibh sed pulvinar proin gravida hendrerit. Venenatis tellus in metus vulputate eu. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Eget nullam non nisi est sit amet facilisis. Eget egestas purus viverra accumsan in nisl. Orci porta non pulvinar neque.",
  // },
};
