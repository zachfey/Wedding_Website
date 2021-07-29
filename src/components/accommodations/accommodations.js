import React from 'react';
import { Image, Container, Button, Card } from 'react-bootstrap';
import pageImage from "../../images/engagement_photos/location1.jpg"
require('./accommodations.scss')
export default function Location() {
    return (
        <Container fluid className="accommodations-container">
            <div id="accommodations">
            <Image src={pageImage} rounded fluid id="accommodations-image"/>
                {/* <div className="overlay-top">
                    <h1 className="text-center engaged">LOCATION</h1>
                </div> */}
            </div>
            <Card className="accommodations-card" style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="https://oakleafcottage.com/storage/app/media/assets/Oakleaf-Cottage-Chattanooga.png" style={{ 'background-color': '#393F2D', 'padding': '10px' }} /> */}
                <Card.Body>
                    <Card.Title>MOXY Chattanooga Downtown</Card.Title>
                    <Card.Text>
                        <p className="address">1220 King Street <br /> Chattanooga, Tennessee 37403</p>

                    </Card.Text>
                    <Button href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1618333626360&key=GRP&app=resvlink" target="_blank">Reserve Room</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}