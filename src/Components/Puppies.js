import React from "react";
import { Route, Switch } from "react-router-dom";
import "./Puppies.css";
import Nova from "./Nova";
import Revan from "./Revan";
import Quigley from "./Quigley";
import Homer from "./Homer";

function Puppies() {
    // Use Router to render only the last selected puppy component to the screen
    return (
        <main>
            <Switch>
                <Route exact path="/Nova">
                    <Nova />
                </Route>
                <Route exact path="/Revan">
                    <Revan />
                </Route>
                <Route exact path="/Quigley">
                    <Quigley />
                </Route>
                <Route exact path="/Homer">
                    <Homer />
                </Route>
            </Switch>
      </main>
    );
}

export default Puppies;