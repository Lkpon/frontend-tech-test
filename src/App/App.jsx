/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Container from "../components/Container";
import Description from "../components/Description";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container />
        <Switch>
          <Route exact path="/">
            <section className="lumx-spacing-padding-horizontal-huge" />
          </Route>
          <Route path="../components/Description" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
