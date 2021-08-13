import React from 'react';
import { Container, Button, Card, CardGroup } from 'react-bootstrap';
require('./accommodations.scss')
export default function Location() {
    return (
        <Container fluid className="accommodations-container">
            <div id="accommodations">
                <h3>We have blocks of rooms with discounted rates at both of the following hotels. Shuttle pickup and dropoff will be at 
                    the Moxy, but the two hotels are very close to each other.
                </h3>
            </div>
            <CardGroup>
                <Card className="accommodations-card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cache.marriott.com/marriottassets/marriott/CHAOX/chaox-guestroom-5829-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*" />
                    <Card.Body>
                        <Card.Title>MOXY Chattanooga Downtown</Card.Title>
                        <Card.Text>
                            <p className="address">1220 King Street <br /> Chattanooga, Tennessee 37403</p>
                            <ul>
                                <li>Complementary beverage provided upon arrival.</li>
                                <li>Valet or self parking is $15/night.</li>
                                <li>Shuttle Pickup and Dropoff is here</li>
                            </ul>
                        </Card.Text>
                        <Button href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1618333626360&key=GRP&app=resvlink" target="_blank">Reserve Room</Button>
                        <div className="map-box">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1633.3382217306846!2d-85.31019794175525!3d35.03982349508723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88605fe8761cce13%3A0xca45ed9b3732da0b!2sMoxy%20Chattanooga%20Downtown!5e0!3m2!1sen!2sus!4v1628812074255!5m2!1sen!2sus" title="moxy" width="400" height="300" style={{border:0}} allowfullscreen=""  loading="lazy"></iframe>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="accommodations-card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.hilton.com/im/en/CHABSQQ/15040308/standard-king-room-01.jpg?impolicy=crop&cw=4500&ch=1889&gravity=NorthWest&xposition=0&yposition=555&rw=1920&rh=806"/>
                    <Card.Body>
                        <Card.Title>The Chattanoogan</Card.Title>
                        <Card.Text>
                            <p className="address">1201 Broad Street <br /> Chattanooga, Tennessee 37402</p>
                            <ul>
                                <li>Self parking $9/night or valet parking $18/night</li>
                                <li>Shuttle pickup and dropoff will be at the Moxy which is about a 7 min walk (0.3 miles)</li>
                            </ul>
                        </Card.Text>
                        <Button href="TODO: Update with link" target="_blank">Reserve Room</Button>
                        <div className="map-box">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1633.3382217306846!2d-85.31019794175525!3d35.03982349508723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88605e7e93bd54df%3A0xcebd61bec2391923!2sThe%20Chattanoogan%20Hotel%2C%20Curio%20Collection%20by%20Hilton!5e0!3m2!1sen!2sus!4v1628811793489!5m2!1sen!2sus" title="chattanoogan" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    )
}