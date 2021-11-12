import React from 'react';
import styled from 'styled-components';

const CardPequenoContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
`

const ImagemPequenoCard = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const ContainerPequenoCardInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const SubtituloPequenoCard = styled.h4`
    margin-bottom: 20px;
`

const TextoPequenoCard = styled.p`
    margin-left: 5px;
    
`

const CardPequeno = (props) => {
    return (
        <CardPequenoContainer>
            <ImagemPequenoCard src= { props.imagem } />
            <ContainerPequenoCardInfo>
                <SubtituloPequenoCard>{ props.nome }</SubtituloPequenoCard>
                <TextoPequenoCard>{ props.descricao }</TextoPequenoCard>
            </ContainerPequenoCardInfo>
        </CardPequenoContainer>
    )
}

export default CardPequeno;