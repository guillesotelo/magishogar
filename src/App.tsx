import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/dashboard'>
        <Dashboard />
      </Route>
      <Route>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
