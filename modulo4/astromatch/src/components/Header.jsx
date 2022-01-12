import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerHeader = styled.div`
    width: 35vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default function Header() {

    const [alterarTela, setAlterarTela] = useState("Match")

    //  onClickTelaMatch = () => {
    //     setAlterarTela("Match")
    // }

    // onClickTelaGostei = () => {
    //     setAlterarTela("ListaPerfils")
    // }

    return(
        <ContainerHeader>
            <h2>astromatch</h2>

            {/* {alterarTela === "Match" ? 
            <button onClick={onClickTelaMatch}>A</button> :
            <button onClick={onClickTelaGostei}>B</button>}
             */}
            
        </ContainerHeader>
    );
}