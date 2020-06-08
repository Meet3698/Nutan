import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import newArrivalComponent from './Components/newArrivalComponent'
import HeaderComponent from './Components/HeaderComponent'
import BlockMakingComponent from './Components/BlockMakingComponent'
import BasicCompnent from './Components/BasicCompnent'
import StealsComponent from './Components/StealsComponent'
import ExhibitionComponent from './Components/ExhibitionComponent'
import AccountComponent from './Components/AccountComponent'
import AboutComponent from './Components/AboutComponent'
import Home from './Components/Home'
import './Components/style.css'
import './Components/bootstrap.css'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/basic" component={BasicCompnent} />
          <Route path="/new-arrivals" component={newArrivalComponent} />
          <Route path="/steals" component={StealsComponent} />
          <Route path="/exhibition" component={ExhibitionComponent} />
          <Route path="/account" component={AccountComponent} />
          <Route path="/block-making" component={BlockMakingComponent} />
          <Route path="/aboutus" component={AboutComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
