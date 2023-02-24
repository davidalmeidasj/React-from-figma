import Home from "../modules/home";
import React from "react";
import { Route, Switch } from 'react-router'
import Cart from "../modules/cart";
import Checkout from "../modules/checkout";

const routes = (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
    </Switch>
)

export default routes;
