import React from "react";
import axios from "axios";
import styled from "styled-components";
import { render } from "@testing-library/react";

export default class AdicionarMusicas extends React.Component{
    state = {
        musica: "",
        artista: "",
        enderecoURL: "",
        faixas: []
    }

    inputAdicionarMusica = (e) => {
        this.setState({ musica: e.target.value })
    }

    inputAdicionarArtista = (e) => {
        this.setState({ artista: e.target.value })
    }

    inputAdicionarFaixas = (e) => {
        this.setState({ enderecoURL: e.target.value })
    }

    AdicionarFaixas = (id) => {
        let URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        let body = {
            name: this.state.musica,
            artist: this.state.artista,
            url: this.state.enderecoURL
        }

        let header = {
            headers: {
                Authorization: "adriano-nunes-joy"
            }
        }

        axios.post(URL, body, header)
        .then((res) => {
            this.setState({ musica:"", artista:"", enderecoURL:""})
            alert("Música adicionada na playlist!")
        })
        .catch((err) => {
            alert(err)
        })
    }

    render(){
        return (
            <div>
                <h2>Adicione suas Músicas Favoritas</h2>
                <div>
                    <input placeholder="Nome da Música" value={this.state.musica} onChange={this.inputAdicionarMusica}/>
                    <input placeholder="Nome do Artista/Banda" value={this.state.artista} onChange={this.inputAdicionarArtista}/>
                    <input placeholder="Link" value={this.state.enderecoURL} onChange={this.inputAdicionarFaixas}/>
                    <button onClick={this.AdicionarFaixas}>Adicionar</button>
                </div>
            </div>
        )
    }

}