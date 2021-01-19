import React, { useState } from 'react';
import './App.scss';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import MainPage from './components/mainPage/mainPage'
import Location from './components/location/location'
import RSVP from './components/rsvp/rsvp'
import Gallery from './components/gallery/gallery'

function App() {
  const [showRSVPModal, setShow] = useState(false);
  const resetShowRSVPModal = () => {
    setShow(false);
  }
  const setShowRSVPModal = () => { 
    setShow(true) 
  }
  return (
    <div className="App">
      <Navbar id="app-navbar" expand="md" bg="light">
        <Navbar.Brand className="wedding-nav names" href="/home">Zach & Katie</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center" justify activeKey="/home">
            <Nav.Item>
              <Nav.Link className="wedding-nav link" onClick={setShowRSVPModal}>RSVP</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="wedding-nav link" href="/location">Location</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="wedding-nav link" href="/registry">Registry</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="wedding-nav link" href="/accomodation">Accomodations</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="wedding-nav link" href="/story">Our Story</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="wedding-nav link" href="/gallery">Gallery</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <RSVP showRSVPLookupModal={showRSVPModal} resetShowRSVPModal={resetShowRSVPModal} />
      <Router>
        <div>
        <Route
                exact
                path="/"
                render={() => <Redirect to="/home" />}
              />
          <Route path="/home" render={() => (
            <MainPage showRSVPLookupModal={setShowRSVPModal} />
          )} />
          <Route path="/location" component={Location} />
          <Route path="/gallery" component={Gallery} />
        </div>
      </Router>
    </div>

  );
}

export default App;
