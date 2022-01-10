import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const ContainerFooter = styled.div`
    width: 35vw;
    height: 10vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export default function Footer() {
    return(
        <ContainerFooter>
             <p>Gostei / Não Gostei</p>
        </ContainerFooter>
    )
}