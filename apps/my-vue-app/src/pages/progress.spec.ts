import { mount } from '@vue/test-utils';
import Progress from './progress.vue';

describe('Progress', () => {
  it('renders properly', () => {
    const wrapper = mount(Progress, {});
    expect(wrapper.text()).toContain('Welcome to Progress');
  });
});
