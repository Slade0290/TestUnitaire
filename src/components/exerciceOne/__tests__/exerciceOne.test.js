import React from 'react'
import ExerciceOne from '../'

import { shallow } from 'enzyme'


it('should match the snapshot', () => {
    const component = shallow(<ExerciceOne disabled={false} counterTitle="test" counterNumber={0} />)
    expect(component).toMatchSnapshot()
})

it('should have four span', () => {
    const component = shallow(
      <ExerciceOne counterTitle="test" counterNumber={0} />
    )
      console.log(component.debug())

    const spanElement = component.find('span')
  
    expect(spanElement.length).toEqual(4)
  })

  it('should have two buttons', () => {
    const component = shallow(
      <ExerciceOne counterTitle="test" counterNumber={0} />
    )
    const buttonElement = component.find('button')
  
    expect(buttonElement.length).toEqual(2)
  })
  
  it('should have two buttons by classname', () => {
    const component = mount(<ExerciceOne counterTitle="test" counterNumber={0} />)
    const buttonElement = component.find('button.styledButton')
  
    console.log(buttonElement.debug())
  
    expect(buttonElement.length).toEqual(2)
  })
  
  it('should return null', () => {
    const component = shallow(
      <ExerciceOne counterTitle="test" counterNumber={0} disabled={true} />
    )
  
    expect(component.type()).toBe(null)
  })
  
  
























  


// it('should match the snapshot (good Practice)', () => {
//   const component = shallow(
//     <ExerciceOne counterTitle="test" counterNumber={0} />
//   )
//   // console.log(component)
//   // console.log(component.debug())
//   // console.log(component.props())
//   // console.log(component.state())
//   expect(component).toMatchSnapshot()
// })

// it('should match the snapshot (bad practice)', () => {
//   const component = renderer
//     .create(<ExerciceOne counterTitle="test" counterNumber={0} />)
//     .toJSON()
//   // `renderer`cree automatiquement un render en "profondeur"
//   // changer un composant enfant peut faire rater ce test

//   expect(component).toMatchSnapshot()
// })