import React from "react"
import { useHistory } from "react-router"

const AdminHome = () => {
    const history = useHistory()

    const goToHomeAdmin = () => {
        history.push("/")
    }

    const goToCreateTrip = () => {
        history.push("/admin/trips/create")
    }

    const goToLogin = () => {
        history.push("/login")
    }
    return(
        <div>
            <h1>AdminHome</h1>
            
            <div>
                <button onClick={goToHomeAdmin}>VOLTAR</button>
                <button onClick={goToCreateTrip}>CRIAR VIAGEM</button>
                <button onClick={goToLogin}>LOGOUT</button>
            </div>
            
        </div>
    )
}

export default AdminHome