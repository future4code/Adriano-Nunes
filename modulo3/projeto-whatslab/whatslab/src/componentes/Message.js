import React from "react";
import styled from "styled-components"
import whatts from "C:/Users/adria/OneDrive/Área de Trabalho/Adriano-Nunes/modulo3/projeto-whatslab/whatslab/src/img/whatts.png"
import chat from "C:/Users/adria/OneDrive/Área de Trabalho/Adriano-Nunes/modulo3/projeto-whatslab/whatslab/src/img/chat.png"
import tresPontos from "C:/Users/adria/OneDrive/Área de Trabalho/Adriano-Nunes/modulo3/projeto-whatslab/whatslab/src/img/tresPontos.png"
import ligar from "C:/Users/adria/OneDrive/Área de Trabalho/Adriano-Nunes/modulo3/projeto-whatslab/whatslab/src/img/ligar.png"


const MessageContainer = styled.div`
  width: 35%;
  height: 90vh;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MessageHeader = styled.header`
    height: 10%;
    width: 100%;
    display: flex;
    background-color: 	#90EE90;
    justify-content: space-between;
    align-items: center;
`

const LogoETitulo = styled.div`
    display: flex;
    padding: 2px 5px;
    width: 30%;
    text-align: center;
    justify-content: space-between;
`

const TituloHeader = styled.h1`
    font-size: 15px;
`

const ImagensContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-around;
    padding: 2px 5px;
    width: 35%;
`

const HeaderImg = styled.img`
    width: 25px;
    height: 25px;
`

const MessegeSection = styled.section`
    height: 80%;
    width: 100%;
    background-color:#FFF8DC;
`

const MessegeFooter = styled.footer`
    height: 10%;
    width: 100%;
    background-color: #D3D3D3;
`

class Message extends React.Component{

    render(){
        return <MessageContainer>
            <MessageHeader>
                <LogoETitulo>
                    <HeaderImg  src={whatts}/>
                    <TituloHeader>WhatsLab</TituloHeader>
                </LogoETitulo>
                
                <ImagensContainer>
                    <HeaderImg src={ligar}/>
                    <HeaderImg src={chat}/>
                    <HeaderImg src={tresPontos}/>
                </ImagensContainer>
            </MessageHeader>

            <MessegeSection>
                <p>msg</p>
            </MessegeSection>

            <MessegeFooter>
                

                <button>Enviar</button>
            </MessegeFooter>
        </MessageContainer>
        
    }
    

}

export default Message