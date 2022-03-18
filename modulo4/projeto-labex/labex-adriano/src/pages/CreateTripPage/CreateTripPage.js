import React from "react"
import { useHistory } from "react-router"

const CreateTrip = () => {
    const history = useHistory()

    const goToAdminHome = () => {
        history.push("/admin/trips/list")
    }


    return(
        <div>
            <h1>Criar Viagens</h1>
            <iframe src="https://giphy.com/embed/Ke7hw4pMbtSP8C8B5f" width="480" height="245" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/aggatour-viagens-turismo-Ke7hw4pMbtSP8C8B5f">via GIPHY</a></p>
        
            <div>
                <button onClick={goToAdminHome}>VOLTAR</button>
                <button>CRIAR</button>
            </div>
        </div>
    )
}

export default CreateTrip