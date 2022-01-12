import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerFooter = styled.div`
    width: 35vw;
    height: 10vh;
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