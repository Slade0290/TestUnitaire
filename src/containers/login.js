import React, { Component } from 'react'
import styled from 'styled-components'

import LoginForm from '../components/loginForm'

import HarryPotterLogo from '../static/images/harryPotterLogo.png'

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`

const LeftDiv = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color.loginBackground};
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  width: 100%;
`
const RightDiv = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color.loginBackground};
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
`
const BookSeparator = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.color.bookSeparator};
  opacity: 0.2;
  box-shadow: 1px 2px 31px 7px;
  width: 1px;
`
const Logo = styled.img`
  width: 250px;
  height: 100px;
`

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MainContainer>
          <LeftDiv>
            <Logo src={HarryPotterLogo} />
          </LeftDiv>
          <BookSeparator />
          <RightDiv>
            <LoginForm />
          </RightDiv>
        </MainContainer>
      </React.Fragment>
    )
  }
}
