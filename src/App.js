import React, { useState } from 'react';
import './App.scss';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { Button, Image, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import MainPage from './components/mainPage/mainPage'
import Location from './components/location/location'
import Accommodations from './components/accommodations/accommodations'
import RSVP from './components/rsvp/rsvp'
import Gallery from './components/gallery/gallery'
import banner from "./images/Banner_Photos/invitationDesign.png"

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
      <div className="content">
        <div id='image-container'>
          <Image src={banner} fluid id="banner-image"/>
          <div id='names'>Katie & Zach</div>
        </div>
        <Navbar id="app-navbar" expand="md" bg="light">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center" justify>
              <Nav.Item>
                <Nav.Link className="wedding-nav link" onClick={setShowRSVPModal}>RSVP</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="wedding-nav link" href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="wedding-nav link" href="/location">Location</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="wedding-nav link" href="/accommodations">Accommodations</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="wedding-nav link" href="/attire">Dress Code</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="wedding-nav link" href="/registry">Registry</Nav.Link>
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
                    strict
                    path="/"
                    render={() => <Redirect to="/home" />}
                  />
            
            <Route path="/home" component={MainPage} />
            <Route path="/location" component={Location} />
            <Route path="/accommodations" component={Accommodations} />
            <Route path="/gallery" component={Gallery} />
          </div>
        </Router>
      </div>
      <div className="rsvp-button-container">
          <Button id="rsvp-button" variant="primary" size="lg" onClick={setShowRSVPModal}>RSVP</Button>
      </div>
    </div>

  );
}
//TODO Trim whitespace from rsvps names
//TODO Not display text when nobody is invited to rehearsal dinner
export default App;
