import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
    font-size: 20px;
    text-transform: uppercase;
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

`

export default class Etapa2 extends React.Component{

    render(){
        return(
            <FormContainer>
                <Titulo>Etapa 2 - Informações do Ensino Superior</Titulo>
            <ol>
                <li>Qual o curso?</li>
                <input />

                <li>Qual a unidade de ensino?</li>
                <input />
            </ol>

         
            </FormContainer>
            
            
        )
    }
}