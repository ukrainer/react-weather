import React, { Component } from 'react';
import './App.css';
import WeatherDisplay from './WeatherDisplay';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";


const PLACES = [
  { name: "Lviv", id: "702550" },
  { name: "Kyiv", id: "703448" },
  { name: "Khmelnytskyy", id: "706369" }
];

class App extends Component {
  state = {
    activePlace : 0
  }

  render() {
    let { activePlace } = this.state
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              React Simple Weather App
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav
                bsStyle="pills"
                stacked
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}
              >
                {PLACES.map((place, index) => (
                  <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={activePlace} id={PLACES[activePlace].id} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
