import React from "react";
import { useHistory } from "react-router";

const ApplicationForm = () => {
    const history = useHistory()

    const goToListTrip = () => {
        history.push("/trips/list")
    }


    return(
        <div>
            <h1>Formulário de Inscrição</h1>
            <iframe src="https://giphy.com/embed/YV524oZMYAihuaRMFw" width="480" height="278" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/wjcollege-college-application-YV524oZMYAihuaRMFw">via GIPHY</a></p>

            <div>
                <button onClick={goToListTrip}>VOLTAR</button>
                <button>ENVIAR</button>
            </div>
       
        </div>
    )
}

export default ApplicationForm