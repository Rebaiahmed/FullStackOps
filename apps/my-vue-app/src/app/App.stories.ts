import type { Meta, StoryObj } from '@storybook/vue3';
import App from './App.vue';

import { expect } from 'storybook/test';

const meta: Meta<typeof App> = {
  component: App,
  title: 'App',
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Welcome to App!/gi)).toBeTruthy();
  },
};
