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

export default class Final extends React.Component{

    render(){
        return(
            <FormContainer>
                <Titulo>O formulário acabou</Titulo>
                
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </FormContainer>
            
            
        )
    }
}