import type { Meta, StoryObj } from '@storybook/vue3';
import Footer from './Footer.vue';

import { expect } from 'storybook/test';

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'Footer',
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Welcome to Footer!/gi)).toBeTruthy();
  },
};
