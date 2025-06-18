import { mount } from '@vue/test-utils';
import Schedule from './schedule.vue';

describe('Schedule', () => {
  it('renders properly', () => {
    const wrapper = mount(Schedule, {});
    expect(wrapper.text()).toContain('Welcome to Schedule');
  });
});
