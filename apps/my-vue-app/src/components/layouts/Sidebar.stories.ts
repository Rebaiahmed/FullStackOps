import type { Meta, StoryObj } from '@storybook/vue3';
import Sidebar from './Sidebar.vue';

import { expect } from 'storybook/test';

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'Sidebar',
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Welcome to Sidebar!/gi)).toBeTruthy();
  },
};
