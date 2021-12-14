import React from "react";
import axios from "axios";
import styled from "styled-components";

export default class Catalago extends React.Component{
    state = {
        playlist: []
    }

    componentDidMount(){
        this.getPlaylist();
    }

    getPlaylist = () => {
        let URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        let header = {
            headers: {
                Authorization: "adriano-nunes-joy"
            }
        }
        axios.get(URL, header)
        .then((res) => {
            this.setState({ playlist: res.data.result.list })
        })
        .catch((err) => { alert(err) })
    }

    deletePlaylist = (id) => {
        axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,

            {
                headers: {
                    Authorization: "adriano-nunes-joy"
                }
            }
        )
        .then(() => {
            alert("Playlist deletada!")
            this.getPlaylist();
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }

    render(){
        let listaDePlaylist = this.state.playlist.map((playlist) => {
            return <p>Nome:{playlist.name} <button onClick={() => this.deletePlaylist(playlist.id)}>Apagar</button>
            ID: {playlist.id} 
            </p>
        })

        return(
            <div key={listaDePlaylist.id}>
                <h2>Quantidade de Playlist: {listaDePlaylist.length}</h2>
                <p>{ listaDePlaylist } </p>

            </div>
        )
    }
}