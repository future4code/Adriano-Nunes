import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const ContainerMatch = styled.div`
    width: 35vw;
    height: 60vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export default function Match() {
    return(
        <ContainerMatch>
             <p>imagem</p>
        </ContainerMatch>
    )
}