import React from "react"
import { useHistory } from "react-router"

const ListTrips = () => {
    const history = useHistory()

    const goToHomeAdmin = () => {
        history.push("/")
    }

    const goToApplicationForm = () => {
        history.push("/trips/application")
    }

    return(
        <div>
            <h1>Lista de Viagens</h1>
            <iframe src="https://giphy.com/embed/LqUx9iazNy50fjlMpR" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/vivaviagens-viagem-viva-viagens-LqUx9iazNy50fjlMpR">via GIPHY</a></p>
        
            <div>
                <button onClick={goToHomeAdmin}>VOLTAR</button>
                <button onClick={goToApplicationForm}>INSCREVER-SE</button>
            </div>
        
        </div>
    )
}

export default ListTrips