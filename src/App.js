import Home from "./Pages/Home";
import Details from "./Pages/Details";

// Navigation
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

class App extends React.Component {
  render() {
    const { db } = this.props;
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home db={db} />
          </Route>
          <Route exact path="/details/:id">
            <Details db={db} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
