import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import newArrivalComponent from './Components/newArrivalComponent'
import HeaderComponent from './Components/HeaderComponent'
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
          <Route path="/newarrivals" component={newArrivalComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
