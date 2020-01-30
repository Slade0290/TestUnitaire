import React from 'react'
import ExerciceSix from '../'

import { shallow } from 'enzyme'

class LocalStorageMock {
    constructor() {
      this.state = {};
    }
  
    clear() {
      this.state = {};
    }
  
    getItem(key) {
      return this.state[key] || null;
    }
  
    setItem(key, value) {
      this.state[key] = value.toString();
    }
  
    removeItem(key) {
      delete this.state[key];
    }
}
global.localStorage = new LocalStorageMock;

describe("localstorage",()=>{
    it('localstorage', () => {
        expect(localStorage).toEqual({state:{}})
    })
    it('localstorage set', () => {
        localStorage.setItem('data', "value")
        expect(localStorage).toEqual({state:{'data':"value"}})
    })
    it('localstorage get', () => {
        expect(localStorage.getItem('data')).toEqual("value")
    })
    it('localstorage clear', () => {
        localStorage.clear()
        expect(localStorage).toEqual({state:{}})
    })
})
describe("compoment localstorage",()=>{
    beforeEach(() => {
        localStorage.clear()
    });
    it('compoment localstorage', () => {
        const c = shallow(<ExerciceSix/>)
        expect(shallow(<ExerciceSix/>).find('p').text()).toEqual("test")
    })
})

