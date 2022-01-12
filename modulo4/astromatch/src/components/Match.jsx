import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const ContainerMatch = styled.div`
    width: 35vw;
    height: 80vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export default function Match() {

    const [perfil, setPerfil] = useState({})

    useEffect(() => {
        getPerfil()

    }, [perfil])

    const getPerfil = () =>{
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/adriano/person`)
        .then((res) => {
            setPerfil(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const figura = "https://picsum.photos/300/400"

    // const listaPerfils = perfil.map(lista => {
    //     return(
    //        <p key={lista.id}>{lista.name}</p> 
    //     )
    // })
    return(
        <ContainerMatch>
            <Header></Header>
           
{/* 
          {listaPerfils} */}
            
            

            <img src= {figura}></img>
            
            <Footer></Footer>
        </ContainerMatch>
    )
}