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
import AboutComponent from './Components/AboutComponent'
import FooterComponent from './Components/FooterComponent'
import CartComponent from './Components/CartComponent'
import './App.css';
import AuthenticatedRoute from './Components/AuthenticatedRoute'

function App() {
  return (
    <div style={{ overflowX: 'hidden'}}>
      <Router>
        <HeaderComponent />
        <Switch>
          <Route path="/Nutan" component={HomeComponent} />
          <Route path="/home" component={HomeComponent} />
          <Route path="/newarrivals" component={newArrivalComponent} />
          <AuthenticatedRoute path="/productDetails" component={ProductComponent} />
          <Route path="/basic" component={BasicCompnent} />
          <Route path="/new-arrivals" component={newArrivalComponent} />
          <Route path="/steals" component={StealsComponent} />
          <Route path="/exhibition" component={ExhibitionComponent} />
          <AuthenticatedRoute path="/account" component={AccountComponent} />
          <Route path="/block-making" component={BlockMakingComponent} />
          <Route path="/cart" component={CartComponent} />
          <Route path="/aboutus" component={AboutComponent} />
        </Switch>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
