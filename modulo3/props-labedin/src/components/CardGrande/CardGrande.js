import React from 'react';
import styled from 'styled-components';

const CardGrandeContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ImagemCardGrande = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const DivCardGrandInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const SubtituloCardGrande = styled.h4`
    margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <CardGrandeContainer>
            <ImagemCardGrande src={ props.imagem } />
            <DivCardGrandInfo>
                <SubtituloCardGrande>{ props.nome }</SubtituloCardGrande>
                <p>{ props.descricao }</p>
            </DivCardGrandInfo>
        </CardGrandeContainer>
    )
}

export default CardGrande;