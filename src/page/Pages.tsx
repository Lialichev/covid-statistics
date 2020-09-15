import React from "react";
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";

// Pages
import General from "./General";

const Pages = () => (
    <Router>
        <Switch>
            <Route
                path="/"
                exact
                component={ General }
            />
            <Redirect to="/"/>
        </Switch>
    </Router>
);

export default Pages;
