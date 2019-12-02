// @vue/test-utils 文档
// https://vue-test-utils.vuejs.org/zh/
// https://vue-test-utils.vuejs.org/zh/guides/#%E7%94%A8-mocha-%E5%92%8C-webpack-%E6%B5%8B%E8%AF%95%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Welcome to Your Vue.js App Vuex ShoppingCart Example';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});


// import { add } from '@/utils/add'

// describe('测试加法函数', () => {
//   it('一个具体的功能测试，测测试数字相加', () => {
//     expect(add(1, 2)).toBe(3)
//   })
//   it('一个具体的功能测试，测测试数字和字符串相加', () => {
//     expect(add('a', 2)).toBe('a2')
//   })
//   it('一个具体的功能测试，测测试数字字符串相加', () => {
//     expect(add('1', 2)).toBe(3)
//   })
// })
