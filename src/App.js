import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => {
  return (
    <div>
      <h1>hats page</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
