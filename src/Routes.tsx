import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Feedback, Form, ProductInformation, Instructions } from './views';
import { NotFound } from './components';

const Routes = () => (
  <>
    <Switch>
      <Route path="/feedback" exact component={Feedback} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/" exact component={ProductInformation} />
      <Route path="/Form" exact component={Form} />
      <Route path="/instructions" exact component={Instructions} />
      <Redirect to="/not-found" />
    </Switch>
  </>
);

export default Routes;
