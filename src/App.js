import React from 'react';
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
import newArrivalComponent from './Components/newArrivalComponent'
import './Components/style.css'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/newarrivals" component={newArrivalComponent}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
