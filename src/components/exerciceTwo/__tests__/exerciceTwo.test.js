import React from 'react'
import ExerciceTwo from '../'

import { shallow } from 'enzyme'

it('should match the snapshot', () => {
    const component = shallow(<ExerciceTwo counterNumber={0} />)
    expect(component).toMatchSnapshot()
})

it('should have "allo" as title', () => {
    const component = shallow(
      <ExerciceTwo counterNumber={0} />
    )
      console.log(component.debug())

    const titleElement = component.find('h1')
  
    expect(titleElement.text()).toEqual('Allo')
})

it('Number of element li equals numberElements dans la props', () => {
    const numberLi = 15;

    const component = shallow(
        <ExerciceTwo counterNumber={0} />
      )
        console.log(component.debug())
  
      const numberElements = component.find('ul')
    
      expect(numberElements.length).toEqual(numberLi)
})