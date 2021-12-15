import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Catalogo from './components/Catalogo';
import CriarPlaylist from './components/CriarPlaylist';
import React from 'react';
import AdicionarMusicas from './components/AdicionarMusicas';


export default class App extends React.Component {
  state = {
   visualizarPlaylist: false
  }

  alterarVisualizacaoPlaylist = () => {
    this.state.visualizarPlaylist ? this.setState({ visualizarPlaylist: false}) : this.setState({ visualizarPlaylist: true })
  }

  render() {
    let mostrarLista = <h1>Erro!</h1>
    if(this.state.visualizarPlaylist){
      mostrarLista = <Catalogo />
    } else {
      mostrarLista = ""
    }

    return(
      <div>
        <CriarPlaylist />
        <button onClick= {this.alterarVisualizacaoPlaylist}>Mostrar Playlist</button>
        {mostrarLista}
        <AdicionarMusicas/>
      </div>
    )
  }
}