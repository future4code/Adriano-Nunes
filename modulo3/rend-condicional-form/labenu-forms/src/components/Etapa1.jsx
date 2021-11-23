import React from "react";
import styled from "styled-components";


export default class Etapa1 extends React.Component{

    render(){
        return(
            <div>
                <h1>Etapa 1 - Dados Gerais</h1>
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

            </div>
            
            
        )
    }
}