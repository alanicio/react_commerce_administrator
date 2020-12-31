import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Layout from './components/Layout';
import Products from './components/Products';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />

        <Route>
          <Layout>
            <Switch>            
              <Route exact path="/productos" component={Products} /> 
              <Route exact path="/productos/nuevo" component={AddProduct} />
              <Redirect to="/" />
            </Switch>            
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
