import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../components/home/home";
import PageNotFound from "../components/pageNotFound/page-not-found";
import MakeAppointments from "../components/appointment/make-appointments";

const Routers = () => {
    return (
        <>
            <div>
                <Switch>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/">
                        <Redirect to="/home"/>
                    </Route>
                    <Route exact path="/doctor/:id" component={MakeAppointments}></Route>
                    <Route component={PageNotFound}></Route>
                </Switch>
            </div>
        </>
    );
};

export default Routers;
