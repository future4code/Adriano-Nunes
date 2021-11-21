import React from "react";
import styled from "styled-components"


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
    background-color: orange;
`

const LogoWhatts = styled.img`
    height: 20vh;
    height: 35px;
    border-radius: 50%;
`

const MessegeSection = styled.section`
    height: 80%;
    width: 100%;
`

const MessegeFooter = styled.footer`
    height: 10%;
    width: 100%;
    background-color: black;
`

class Message extends React.Component{

    render(){
        return <MessageContainer>
            <MessageHeader>
                 
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