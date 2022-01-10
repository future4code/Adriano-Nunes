import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Match from './components/Match';

const ContainerApp = styled.div `
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
function App() {
  return (
    <ContainerApp>
      <Header>
       
      </Header>

     <Match>

     </Match>

      <Footer>

      </Footer>
    </ContainerApp>
  );
}

export default App;
