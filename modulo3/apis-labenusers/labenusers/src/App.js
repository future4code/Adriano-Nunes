import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: darkgray;
  width: 100vw;
  height: 100vh;
`

const  Info = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 15px;

  &:hover{
    color: brown;
  }
`

const Input = styled.input`
  width: 30%;
  height: 5%;
  margin: 5px;
  border: 1px solid black;
`

const Botao = styled.button`
  width: 10%;
  height: 10%;
  background-color: orange;
  border-radius: 5px;
  font-weight: bolder;
  color: white;
  border: 1px solid black;
  margin-top: 15px;
  
  &:active {
    background-color: orangered;
  }
`

export default class App extends React.Component {
  state ={
    cadastro : [],
    inputNome: "",
    inputEmail: ""
  }
 
  onChangeNome = (e) => {
    this.setState({ inputNome: e.target.value });
  }

  onChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  }

  componentDidMount() {
    this.pegarLista();
  }
 
  pegarLista = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "adriano-nunes-joy"
          }
        }
      )
      .then((res)=>{
        this.setState({ cadastro: res.data})
      })
      .catch((err)=>{
        console.log(err.response.data)
      })
  }


  criarUsuario = () => {
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    };

    const header = {
      headers: {
        Authorization: "adriano-nunes-joy"
      }
    };

    axios
      .post(URL, body, header)
      .then((res)=>{
        console.log("Usuário Cadastrado!")
      })
      .catch((err)=>{
        console.log(err.response.data);
      });
  }


 
 
  render() {
   const lista = this.state.cadastro.map((user)=>{
     return <p>{user.name}</p>
   })
    return (
      <AppContainer>
        <Info>Nome:</Info>
        <Input
          value={this.state.inputNome}
          onChange={this.onChangeNome}
          placeholder={"Digite seu nome"}
        
        />

        <Info>Email:</Info>
        <Input
          value={this.state.inputEmail}
          onChange={this.onChangeEmail}
          placeholder={"email@email.com"}
    
        />

        <Botao onClick={this.criarUsuario}>ENVIAR</Botao>

        {lista}
      </AppContainer>
  );
 }
 
}


