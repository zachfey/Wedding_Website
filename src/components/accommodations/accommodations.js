import React from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
require('./accommodations.scss')
export default function Location() {
    return (
        <Container fluid className="accommodations-container">
            <div id="accommodations">
             <h2 className="page-header">Accommodations</h2>
            </div>
            <Row xs={1} md={2}>
                <Col>
                <Card className="accommodations-card">
                    <div className='card-image'>
                    <Card.Img variant="top" src="https://cache.marriott.com/marriottassets/marriott/CHAOX/chaox-guestroom-5829-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*" />
                    </div>
                    <Card.Body>
                        <Card.Title>MOXY Chattanooga Downtown</Card.Title>
                        <Card.Text>
                            <p className="address">1220 King Street<br /> Chattanooga, TN 37403</p>
                        </Card.Text>
                            <ul>
                                <li>Complementary beverage provided upon arrival.</li>
                                <li>Valet or self parking is $15/night.</li>
                                <li>Shuttle pickup and dropoff is here</li>
                            </ul>
                        <Button href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1618333626360&key=GRP&app=resvlink" target="_blank">Reserve Room At MOXY</Button>
                        <div className="map-box">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1633.3382217306846!2d-85.31019794175525!3d35.03982349508723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88605fe8761cce13%3A0xca45ed9b3732da0b!2sMoxy%20Chattanooga%20Downtown!5e0!3m2!1sen!2sus!4v1628812074255!5m2!1sen!2sus" title="moxy" width="400" height="300" style={{border:0}} allowfullscreen=""  loading="lazy"></iframe>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="accommodations-card" >
                    <div className='card-image'>
                        <Card.Img variant="top" src="https://www.hilton.com/im/en/CHABSQQ/15040308/standard-king-room-01.jpg?impolicy=crop&cw=4500&ch=1889&gravity=NorthWest&xposition=0&yposition=555&rw=1920&rh=806"/>
                    </div>
                    <Card.Body>
                        <Card.Title>The Chattanoogan</Card.Title>
                        <Card.Text>
                            <p className="address">1201 Broad Street <br /> Chattanooga, TN 37402</p>
                        </Card.Text>
                            <ul>
                                <li>Self parking $9/night or valet parking $18/night</li>
                                <li>Shuttle pickup and dropoff will be at the Moxy which is about a 7 min walk (0.3 miles)</li>
                            </ul>
                        <Button href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=CHABSQQ&groupCode=GHFW&arrivaldate=2021-10-28&departuredate=2021-10-31&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT" target="_blank">Reserve Room At The Chattanoogan</Button>
                        <div className="map-box">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1633.3382217306846!2d-85.31019794175525!3d35.03982349508723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88605e7e93bd54df%3A0xcebd61bec2391923!2sThe%20Chattanoogan%20Hotel%2C%20Curio%20Collection%20by%20Hilton!5e0!3m2!1sen!2sus!4v1628811793489!5m2!1sen!2sus" title="chattanoogan" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}