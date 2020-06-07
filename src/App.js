import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import newArrivalComponent from './Components/newArrivalComponent'
import HeaderComponent from './Components/HeaderComponent'
import BlockMakingComponent from './Components/BlockMakingComponent'
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
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/new-arrivals" component={newArrivalComponent} />
          <Route path="/block-making" component={BlockMakingComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
