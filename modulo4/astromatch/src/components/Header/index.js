import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`

const Header = (props) => {
  return (
    <HeaderContainer>
      
      <button onClick={() => props.changeScreen('homeScreen')}>Tela INICIAL</button>
      <h1>astromatch</h1>
      <button onClick={() => props.changeScreen('matchesScreen')}>Tela de MATCHES</button>
    </HeaderContainer>
  );
}

export default Header;
