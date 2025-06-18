import { mount } from '@vue/test-utils';
import Routines from './routines.vue';

describe('Routines', () => {
  it('renders properly', () => {
    const wrapper = mount(Routines, {});
    expect(wrapper.text()).toContain('Welcome to Routines');
  });
});
