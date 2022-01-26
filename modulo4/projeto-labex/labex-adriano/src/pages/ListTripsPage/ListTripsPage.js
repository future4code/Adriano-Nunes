import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { BASE_URL } from "../../utils/constants";
import styled from "styled-components";

const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const InfoList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    width: 50vw;
    height: 50vh;
    margin: 2px;
    `

const ListTrips = () => {
    const history = useHistory()

    const goToHomeAdmin = () => {
        history.push("/")
    }

    const goToApplicationForm = () => {
        history.push("/trips/application")
    }

    const [tripList, setTripList] = useState([])

    const getTripList = () => {
        axios
        .get(`${BASE_URL}/trips`)
        .then((res) => setTripList(res.data.trips))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getTripList()
    }, [])

    const renderList = tripList.map((trip) => {
        return(
            <ContainerList>

                <InfoList>
                    <p>NOME: {trip.name}</p>
                    <p>DESCRIÇÃO: {trip.description}</p>
                    <p>PLANETA: {trip.planet} </p>
                    <p>DURAÇÃO: {trip.durationInDays} </p>
                    <p>DATA: {trip.date} </p>

                    <button>Apagar</button>
                </InfoList>
            
            </ContainerList>
           
        )
    })
    return(
        <div>
            <h1>Lista de Viagens</h1>
           
           <div>
                {renderList}
           </div>
           
            <div>
                <button onClick={goToHomeAdmin}>VOLTAR</button>
                <button onClick={goToApplicationForm}>INSCREVER-SE</button>
            </div>
        
        </div>
    )
}

export default ListTrips