import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  let wrapper;
  beforeEach( async () => {
    wrapper = shallowMount(App);
  })

  it('enterNum changes running total', () => {
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it('can subtract numbers', () => {
    wrapper.vm.previousTotal = 7;
    wrapper.vm.subtract(4);
    expect(wrapper.vm.runningTotal).to.equal(3);
  })  

  it('can multiply numbers', () => {
    wrapper.vm.previousTotal = 3;
    wrapper.vm.multiply(5);
    expect(wrapper.vm.runningTotal).to.equal(15);
  })

  it('can divide numbers', () => {
    wrapper.vm.previousTotal = 21;
    wrapper.vm.divide(7);
    expect(wrapper.vm.runningTotal).to.equal(3);
  })

  it('can concatenate numbers', () => {
    wrapper.vm.newTotal = false;
    wrapper.vm.runningTotal = 12;
    wrapper.vm.numberClick(3);
    expect(wrapper.vm.runningTotal).to.equal(123)
  })

  it('should be able to chain operators', () => {
    wrapper.vm.previousTotal = 15
    wrapper.vm.previousOperator = "+";
    wrapper.vm.add(5);
    expect(wrapper.vm.runningTotal).to.equal(20);

  })

  it('should clear the total without ruining current operation', () => {
    wrapper.vm.previousTotal = 12;
    wrapper.vm.runningTotal = 10;
    wrapper.vm.clearClick();
    expect(wrapper.vm.runningTotal).to.equal(0);
    wrapper.vm.add(7);
    expect(wrapper.vm.runningTotal).to.equal(19);
  })
})
