import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
require('./location.scss')
export default function Location() {
    return (
        <Container fluid className="location-container">
            <div id="location">
                <div className="overlay-top">
                    <h1 className="text-center engaged">LOCATION</h1>
                </div>
            </div>
            <Card className="location-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://oakleafcottage.com/storage/app/media/assets/Oakleaf-Cottage-Chattanooga.png" style={{ 'background-color': '#393F2D', 'padding': '10px' }} />
                <Card.Body>
                    <Card.Title>Oakleaf Cottage</Card.Title>
                    <Card.Text>
                        <h5>4:00pm</h5>
                        <p className="address">6979 GA-136 <br /> Trenton, GA 30752</p>

                    </Card.Text>
                    <Button href="https://g.page/OakleafCottage?share" target="_blank">View on Map</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}