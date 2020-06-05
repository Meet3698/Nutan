import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import newArrivalComponent from './Components/newArrivalComponent'
import HeaderComponent from './Components/HeaderComponent'
import './Components/style.css'
import './Components/bootstrap.css'
import './App.css';
import FilterComponent from './Components/FilterComponent'
import {Container, Row, Col} from "react-bootstrap";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Container fluid>
        <Row>
          <Col xs={2} className="sidebar-wrapper">
            <FilterComponent />
          </Col>
          <Col xs={10} className="page-content-wrapper">
            <>
              <Router>
                <Switch>
                  <Route path="/newarrivals" component={newArrivalComponent} />
                </Switch>
              </Router>
            </>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
