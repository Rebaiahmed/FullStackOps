import type { Meta, StoryObj } from '@storybook/angular';
import { AppComponent } from './app.component';
import { expect } from 'storybook/test';

const meta: Meta<AppComponent> = {
  component: AppComponent,
  title: 'AppComponent',
};
export default meta;
type Story = StoryObj<AppComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/app works!/gi)).toBeTruthy();
  },
};
