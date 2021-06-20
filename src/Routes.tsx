import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import UserProfile from './pages/UserProfile/UserProfile';

const Routes = () =>(
    <Switch>
        <Route exact path="/" component={UserProfile}/>
        <Route exact path="/home" component={Home}/>

    </Switch>
  
)
export default Routes;