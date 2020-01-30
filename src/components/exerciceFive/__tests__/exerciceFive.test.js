import React from 'react'
import ExerciceFive from '../'

import { shallow } from 'enzyme'

 it('true', () => {
    const component = shallow(<ExerciceFive counterTitle='loading title' />);
  
    component.find('button.loadButton').simulate('click');
  
    expect(component.state().isLoading).toEqual(true);
  });
  