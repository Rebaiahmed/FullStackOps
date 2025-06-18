import { mount } from '@vue/test-utils';
import Footer from './footer.vue';

describe('Footer', () => {
  it('renders properly', () => {
    const wrapper = mount(Footer, {});
    //expect(wrapper.text()).toContain('Welcome to Footer');
  });
});
