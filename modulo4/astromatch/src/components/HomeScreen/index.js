import React from "react"
import styled from "styled-components"

const HomeScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    height: 70vh;
    width: 100%;
`

const ButtonMatchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    margin: 5vh;
`

const ButtonNo = styled.button`
    border-radius: 50%;
    background: gray;
    height: 8vh;
    width: 4vw;
    
`

const ButtonMatch = styled.button`
    border-radius: 50%;
    background: red;
    height: 8vh;
    width: 4vw;
    margin-left: 8vw;
`
const HomeScreen = () => {
    return(
        <HomeScreenContainer>
            TELA INICIAL
            <ButtonMatchContainer>
                <ButtonNo>&#10007;</ButtonNo>
                <ButtonMatch>&#128293;</ButtonMatch>
            </ButtonMatchContainer>
            
        </HomeScreenContainer>
    )
}

export default HomeScreen;