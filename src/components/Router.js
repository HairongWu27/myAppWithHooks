import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login/login';
import Main from './main/Main';



function User(props) {
    return <h1>Hello {props.match.params.username}!</h1>;
  }

const Router = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/user/:username" component={User} />
        <Route path="/main" component={Main} />
      </Switch>  
    </BrowserRouter>
  )

  export default Router;