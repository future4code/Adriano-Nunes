import React from "react";
import axios from "axios";
import styled from "styled-components"

export default class CriarPlaylist extends React.Component {
    state = {
        inputPlaylist: ""
    }

    alterarInput = (e) => {
        this.setState({ inputPlaylist: e.target.value })
    }

    CriarPlaylist = () => {
        let URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        let body = {
            "name": this.state.inputPlaylist
        }

        let header = {
            headers: {
                Authorization: "adriano-nunes-joy"
            }
        }

        axios.post(URL, body, header)
        .then((res)=> {
            this.setState({ inputPlaylist: "" })
            alert("Playlist criada com sucesso!")
        })
        .catch((err)=>{ alert(err) })
    }

    render(){
        return (
            <div>
                <h2>Criar Playlist</h2>
                <div>
                    <input 
                    placeholder = "Nome da Playlist"
                    value = {this.state.inputPlaylist}
                    onChange = {this.alterarInput}
                    />

                    <button onClick = {this.CriarPlaylist}>Criar Playlist</button>
                </div>
            </div>
        )
    }
}