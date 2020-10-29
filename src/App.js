import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./auth/Login";
import Todo from "./todo/Todo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/todo" component={Todo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
