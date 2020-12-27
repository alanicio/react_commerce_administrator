import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Layout from './components/Layout';
import Products from './components/Products';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" render={ () => <Layout></Layout> } />
        <Route exact path="/productos" render={ () => <Layout><Products/></Layout> } />
        <Route exact path="/productos/nuevo" render={ () => <Layout><AddProduct/></Layout> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
