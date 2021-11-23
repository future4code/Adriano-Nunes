import React from "react";
import styled from "styled-components";


export default class Etapa3 extends React.Component{

    render(){
        return(
            <div>
                <h1>Etapa 3 - Informações Gerais de Ensino</h1>
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

            
            </div>
            
            
        )
    }
}