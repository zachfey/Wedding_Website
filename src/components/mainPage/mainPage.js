import React from 'react';
import { Container, Button } from 'react-bootstrap';
require('./mainPage.scss')

export default function MainPage(props) {
    return (
        <Container fluid>
            <div id="walkingDog">
                <div className="overlay-top">
                    <h1 className="text-center engaged">WE'RE GETTING MARRIED!</h1>
                    <p className="text-center date">Tying the knot October 30th, 2021</p>
                </div>
                <div className="rsvp-button-container">
                    <Button id="rsvp-button" variant="primary" size="lg" onClick={props.showRSVPLookupModal}>RSVP</Button>
                </div>
            </div>
        </Container>
    )
}