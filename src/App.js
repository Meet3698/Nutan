import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import newArrivalComponent from './Components/newArrivalComponent'
import HeaderComponent from './Components/HeaderComponent'
import HomeComponent from './Components/HomeComponent'
import ProductComponent from './Components/ProductComponent.jsx'
import BlockMakingComponent from './Components/BlockMakingComponent'
import BasicCompnent from './Components/BasicCompnent'
import StealsComponent from './Components/StealsComponent'
import ExhibitionComponent from './Components/ExhibitionComponent'
import AccountComponent from './Components/AccountComponent'
import Home from './Components/Home'
import './Components/style.css'
import './Components/bootstrap.css'
import './App.css';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/home" component={HomeComponent} />
          <Route path="/newarrivals" component={newArrivalComponent} />
          <Route path="/productDetails" component={ProductComponent}/>
          <Route path="/basic" component={BasicCompnent} />
          <Route path="/new-arrivals" component={newArrivalComponent} />
          <Route path="/steals" component={StealsComponent} />
          <Route path="/exhibition" component={ExhibitionComponent} />
          <Route path="/account" component={AccountComponent} />
          <Route path="/block-making" component={BlockMakingComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
