import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import fundo from "../../img/fundo.jpg"

const Container = styled.div`
    background-image: url(${fundo});
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
`
const Titulo = styled.h1`
    font-size: 65px;
    font-weight: bolder;
    padding: 0;
`
const Subtitulo = styled.h2`
    font-size: 45px;
    font-style: italic;
    padding: 0;
`


const HomePage = () => {
    const history = useHistory();

    const goToListTripPage = () => {
        history.push("/trips/list")
    }

    const goToAdminHomePage = () => {
        history.push("/admin/trips/list")
    }
    return(
        <Container>
            <div>
                <Titulo>ABN SPACE</Titulo>
                <Subtitulo>Travel e Transport</Subtitulo>
            </div>
            
            <div>
                <button onClick={goToListTripPage}>Viagens</button>
                <button onClick={goToAdminHomePage}>Área Administrativa</button>
            </div>
        </Container>
    )
}

export default HomePage