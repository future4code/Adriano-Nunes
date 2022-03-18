import AdminHome from "../pages/AdminHomePage/AdminHomePage"
import ApplicationForm from "../pages/ApplicationFormPage/ApplicationFormPage"
import CreateTrip from "../pages/CreateTripPage/CreateTripPage"
import HomePage from "../pages/HomePage/HomePage"
import ListTrips from "../pages/ListTripsPage/ListTripsPage"
import Login from "../pages/LoginPage/LoginPage"
import TripDetails from "../pages/TripDetailsPage/TripDetailsPage"
import { BrowserRouter, Switch, Route } from "react-router-dom"


const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>

                <Route exact path={"/trips/list"}>
                    <ListTrips />
                </Route>

                <Route exact path={"/trips/application"}>
                    <ApplicationForm />
                </Route>

                <Route exact path={"/login"}>
                    <Login />
                </Route>

                <Route exact path={"/admin/trips/list"}>
                    <AdminHome />
                </Route>

                <Route exact path={"/admin/trips/create"}>
                    <CreateTrip />
                </Route>

                <Route exact path={"/admin/trips/:id"}>
                    <TripDetails />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router