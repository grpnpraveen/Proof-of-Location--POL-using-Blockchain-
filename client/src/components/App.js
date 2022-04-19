import React from "react";
import GetLocation from "./GetLocation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddLocation from "./AddLocation";
import Landing from "./Landing";

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Landing} />
                        <Route
                            path="/getLocation"
                            exact
                            component={GetLocation}
                        />
                        <Route
                            path="/addLocation"
                            exact
                            component={AddLocation}
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
