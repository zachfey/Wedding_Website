import React from 'react';
import { Image, Container, Button, Card } from 'react-bootstrap';
import pageImage from "../../images/oakleafCottageBanner.jpg"
require('./location.scss')
export default function Location() {
    return (
        <Container fluid className="location-container">
            <div id="location">
                <Image src={pageImage}></Image>
            {/* <Image src={pageImage} rounded fluid id="location-image"/> */}
                {/* <div className="overlay-top">
                    <h1 className="text-center engaged">LOCATION</h1>
                </div> */}
                {/* <h1>Location</h1> */}
            </div>
            <Card className="location-card" style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="https://oakleafcottage.com/storage/app/media/assets/Oakleaf-Cottage-Chattanooga.png" style={{ 'background-color': '#393F2D', 'padding': '10px' }} /> */}
                <Card.Body>
                    {/* <Card.Title></Card.Title> */}
                    <Card.Text>
                        <p>The ceremony and reception will be held at</p>
                        <h4>Oakleaf Cottage</h4>
                        <h5>5:00pm</h5>
                        <p className="address">6979 GA-136<br/>Trenton, GA 30752</p>
                        <Button href="https://g.page/OakleafCottage?share" target="_blank">View on Map</Button>
                        <p><i>Transportation to and from the venue from the Moxy Hotel will be provided.</i></p>

                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}