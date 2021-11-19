import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components';
import HeaderContainer from './componentes/HeaderContainer';

const AppContainerPrincipal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const MessengerContainer = styled.div`
  width: 35%;
  height: 90vh;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
class App extends React.Component {
  render(){
    return (
      <AppContainerPrincipal>
        <MessengerContainer>
          <header>
            <h1>cabecalho</h1>
          </header>

          <main>
            <p>texto das mensagem</p>
          </main>

          <footer>
            <h2>footer</h2>
          </footer>
        </MessengerContainer>
      </AppContainerPrincipal>
    );
  }
}

export default App;
