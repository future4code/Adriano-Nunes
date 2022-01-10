import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const ContainerHeader = styled.div`
    width: 35vw;
    height: 10vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export default function Header() {
    return(
        <ContainerHeader>
             <h2>Astromatch</h2>
        </ContainerHeader>
    )
}