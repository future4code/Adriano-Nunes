import React from "react"
import { useHistory } from "react-router"

const Login = () => {
    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }

    const goToAdminHome = () => {
        history.push("/admin/trips/list")
    }
    return(
        <div>
            <h1>Login</h1>
            <iframe src="https://giphy.com/embed/t0virGpgSlp4mkfiXq" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/adultswim-adult-swim-birdgirl-access-denied-t0virGpgSlp4mkfiXq">via GIPHY</a></p>

            <div>
                <button onClick={goToHome}>VOLTAR</button>
                <button onClick={goToAdminHome}>ENTRAR</button>
            </div>
         
         </div>
    )
}

export default Login