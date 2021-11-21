import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components';
import Message from './componentes/Message';

const AppContainerPrincipal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  
`


class App extends React.Component {
  render(){
    return (
      <AppContainerPrincipal>
        <Message 
        
        />
      </AppContainerPrincipal>
    );
  }
}

export default App;
