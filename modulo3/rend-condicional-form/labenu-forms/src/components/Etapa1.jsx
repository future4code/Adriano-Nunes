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
export default class Etapa1 extends React.Component{

    render(){
        return(
            <FormContainer>
                <Titulo>Etapa 1 - Dados Gerais</Titulo>
            <ol>
                <li>Qual o seu nome?</li>
                <input />

                <li>Qual sua idade?</li>
                <input />

                <li>Qual seu email?</li>
                <input />

                <li>Qual o sua escolaridade?</li>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensiso superior completo</option>
                </select>
            </ol>

            </FormContainer>
            
            
        )
    }
}