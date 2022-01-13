import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import MatchesScreen from './components/MatchesScreen';

const ContainerTela = styled.div `
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContainerApp = styled.div`
  width: 35vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('homeScreen');

  const renderCurrentScreen = () => {
    if(currentScreen === 'homeScreen'){
      return <HomeScreen />
    } else if(currentScreen === 'matchesScreen'){
      return <MatchesScreen />
    }
  }

  const changeScreen = (currentScreen) => {
    setCurrentScreen(currentScreen)
  }
  

  return (
    <ContainerTela>
      
      <ContainerApp>
        
        <Header changeScreen={changeScreen}/>
        {renderCurrentScreen()}
      
      </ContainerApp>
   
    </ContainerTela>
    
  );
}

export default App;
