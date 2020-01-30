import React from 'react'
import ExerciceFive from '../'

import { shallow } from 'enzyme'

 it('true', () => {
    const component = shallow(<ExerciceFive counterTitle='loading title' />);
  
    component.find('button.loadButton').simulate('click');
  
    expect(component.state().isLoading).toEqual(true);
  });
  
  it('should call decrement once', () => {
    const decrementMock = jest.fn();
    const component = shallow(<ExerciceFive counterNumber={0} counterTitle="title" decrement={decrementMock} />)
    const decrementBtn = component.find('.decrementButton')
    decrementBtn.simulate('click')
    expect(decrementMock.mock.calls.length).toBe(1);
})

it('should call increment once', () => {
    const incrementMock = jest.fn();
    const component = shallow(<ExerciceFive counterNumber={0} counterTitle="title" increment={incrementMock} />)
    const incrementBtn = component.find('.incrementButton')
    incrementBtn.simulate('click')
    expect(incrementMock.mock.calls.length).toBe(1);
})