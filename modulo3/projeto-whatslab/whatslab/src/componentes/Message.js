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
    height: 90%;
    width: 100%;
    background-color:#FFF8DC;
    
`

const NomeUsuarioInput = styled.input`
    width: 30%;
    height: 50%;
    margin: 5px 2px;
    border: 0.5px solid black;
`

const MensagemInput = styled.input`
    width: 45%;
    height: 50%;
    margin: 5px 2px;
    border: 0.5px solid black;
`

const ButtonSend = styled.button`
    width: 16%;
    height: 65%;
    border-radius: 10%;
    margin: 5px 2px;
    background-color: #A9A9A9;
    color: white;
    font-weight: bold;

    &:active{
        background-color: #696969;
    }
`

const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  border: 2px solid black;
  background-color: #D3D3D3;
`

class Message extends React.Component{
    state = {
        mensagens: [
           {
               nomeUsuario: "",
               mensagem: ""
           }
        ],
    
        valorInputNomeUsuario: "",
        valorInputMensagem:""
    };
    
    enviarMensagem = () => {
        const novaMensagem = {
            nomeUsuario: this.state.valorInputNomeUsuario,
            mensagem: this.state.valorInputMensagem
        };
    
        const outraMensagem = [...this.state.mensagens, novaMensagem];
          this.setState({ mensagens: outraMensagem });
          this.setState({ valorInputNomeUsuario: ""});
          this.setState({ valorInputMensagem: ""});
        } 
    
        onChangeInputNomeUsuario = (event) => {
          this.setState({ valorInputNomeUsuario: event.target.value });
        }
    
        onChangeInputMensagem = (event) => {
          this.setState({ valorInputMensagem: event.target.value });
        }
    
      render(){
        const listaDeMensagem = this.state.mensagens.map((mensagem)=>{
          return(
              <p><br />
              {mensagem.nomeUsuario}<br />
              
              {mensagem.mensagem}<br />
              </p>
          )
          
        })

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
                {listaDeMensagem}
            </MessegeSection>
            
            <ContainerInput>
                <NomeUsuarioInput
                    value={this.state.valorInputNomeUsuario}
                    onChange={this.onChangeInputNomeUsuario}
                    placeholder={"Nome"}
                />

                <MensagemInput
                    value={this.state.valorInputMensagem}
                    onChange={this.onChangeInputMensagem}
                    placeholder={"Mensagem"}
                />
                <ButtonSend onClick={this.enviarMensagem}>Enviar</ButtonSend>      
            </ContainerInput>
            
        </MessageContainer>
        
     }
    
    }

export default Message