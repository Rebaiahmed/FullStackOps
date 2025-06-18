import type { Meta, StoryObj } from '@storybook/angular';
import { NxWelcomeComponent } from './nx-welcome.component';
import { expect } from 'storybook/test';

const meta: Meta<NxWelcomeComponent> = {
  component: NxWelcomeComponent,
  title: 'NxWelcomeComponent',
};
export default meta;
type Story = StoryObj<NxWelcomeComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/nx-welcome works!/gi)).toBeTruthy();
  },
};
