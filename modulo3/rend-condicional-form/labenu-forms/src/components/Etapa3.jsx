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

export default class Etapa3 extends React.Component{

    render(){
        return(
            <FormContainer>
                <Titulo>Etapa 3 - Informações Gerais de Ensino</Titulo>
            <ol>
                <li>Por que você não terminou um curso de graduação</li>
                <input />

                <li>Você fez algum curso complementar </li>
                <select>
                    <option>Nenhum</option>
                    <option>Curso de Inglês</option>
                    <option>Curso Técnico</option>
                </select>
            </ol>

            
            </FormContainer>
            
            
        )
    }
}