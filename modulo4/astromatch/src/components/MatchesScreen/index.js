import React from "react";
import styled from "styled-components";

const MatchesScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 60vh;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-bottom: solid;
`


const MatchesScreen = (props) => {
    return(
        <div>
        <HeaderContainer>
            <h1>astromatch</h1>
            <button onClick={() => props.goHomeScreen('homeScreen')}>Tela INICIAL</button>
        </HeaderContainer>

        <MatchesScreenContainer>
            TELA INICIAL

        </MatchesScreenContainer>
    </div>
    )
}

export default MatchesScreen;