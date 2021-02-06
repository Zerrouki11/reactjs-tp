import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Page from '../tp2/Page.jsx';
import Form from '../tp1/Form.js';
import PageCard from '../tp3/PageCard';
import AppTodo from '../AppTodo';

import Topbar from "./Topbar";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
      <Route exact path="/" component={() => <Form/>} />
      <Route exact path="/tp1" component={() => <Form/>} />
      <Route exact path="/tp2" component={() => <Page/>} />
      <Route exact path="/tp3" component={() => <PageCard/>} />
      <Route exact path="/tp4" component={() => <AppTodo/>} />
    
    </Switch>
  </Container>
);

export default Content;
