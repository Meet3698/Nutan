import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import newArrivalComponent from './Components/newArrivalComponent'
import HeaderComponent from './Components/HeaderComponent'
import './Components/style.css'
import './Components/bootstrap.css'
import './App.css';
// import FilterComponent from './Components/FilterComponent'

function App() {
  return (
    <div>
      <HeaderComponent/>
        <Router>
          <Switch>
            <Route path="/newarrivals" component={newArrivalComponent}/>
          </Switch>
        </Router> 
    </div>
  );
}

export default App;
