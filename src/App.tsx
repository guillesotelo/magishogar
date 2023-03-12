import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
