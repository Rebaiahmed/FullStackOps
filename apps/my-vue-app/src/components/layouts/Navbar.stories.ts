import type { Meta, StoryObj } from '@storybook/vue3';
import Navbar from './Navbar.vue';

import { expect } from 'storybook/test';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'Navbar',
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Welcome to Navbar!/gi)).toBeTruthy();
  },
};
