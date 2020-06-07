import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import newArrivalComponent from './Components/newArrivalComponent'
import HeaderComponent from './Components/HeaderComponent'
import HomeComponent from './Components/HomeComponent'
import ProductComponent from './Components/ProductComponent.jsx'
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
