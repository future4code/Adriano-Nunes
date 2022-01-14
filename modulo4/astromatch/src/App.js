import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import HomeScreen from './components/HomeScreen';
import MatchesScreen from './components/MatchesScreen';
import { ChakraProvider, Flex } from '@chakra-ui/react';

const App = () => {

  const [currentScreen, setCurrentScreen] = useState('homeScreen');

  const goHomeScreen = () => {
    setCurrentScreen('homeScreen')
  }

  const goMatchesScreen = () => {
    setCurrentScreen('matchesScreen')
  }

  
  return (
    <ChakraProvider>
      <Flex justify='center'> 
        {currentScreen === 'homeScreen' ? 
        <HomeScreen goMatchesScreen={goMatchesScreen}/> : <MatchesScreen goHomeScreen={goHomeScreen}/>}
      </Flex>
    </ChakraProvider>
    
  );
}

export default App;
