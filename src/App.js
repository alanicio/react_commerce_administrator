import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>

      <Switch>
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/" component={Header} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
