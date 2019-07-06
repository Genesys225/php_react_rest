import React, { Component } from "react";
import routes from "./routes";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import NoMatch from "./NoMatch";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          {routes.map(({ path, exact, component, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={props =>
                React.cloneElement(
                  component,
                  { ...props, ...rest },
                  props.children
                )
              }
            />
          ))}
          <Route render={props => <NoMatch {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
