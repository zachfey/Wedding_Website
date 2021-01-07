import React from 'react';
import { Container, Button } from 'react-bootstrap';
import walkingDog from '../../images/engagement_photos/walkingDog.jpg';
require('./mainPage.css')

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
        // <div id="carouselExampleIndicators" className="carousel slide page" data-ride="carousel" >
        //     <div className="carousel-inner">
        //         <div className="overlay-top">
        //             <h2 className="ourNames">Zach + Katie</h2>
        //         </div>
        // <div className="overlay-middle">
        //     <h1 className="text-center engaged">We're Engaged!</h1>
        //     <p className="text-center date">Tying the knot October 30th, 2021</p>
        // </div>
        //         <div className="carousel-filter">
        //             <div className="carousel-item active">
        //                 <img src={skyloft} className="d-block w-100" alt="..." />
        //                 <div className="layer"></div>
        //             </div>
        //             <div className="carousel-item">
        //                 <img src={petrified} className="d-block w-100" alt="..." />
        //                 <div className="layer"></div>
        //             </div>
        //             <div className="carousel-item">
        //                 <img src={petrified2} className="d-block w-100" alt="..." />
        //                 <div className="layer"></div>
        //             </div>
        //             <div className="carousel-item">
        //                 <img src={sanFran} className="d-block w-100" alt="..." />
        //                 <div className="layer"></div>
        //             </div>
        //             <div className="carousel-item">
        //                 <img src={arizona} className="d-block w-100" alt="..." />
        //                 <div className="layer"></div>
        //             </div>
        //             <div className="carousel-item">
        //                 <img src={ring} className="d-block w-100" alt="..." />
        //                 <div className="layer"></div>
        //             </div>
        //             <div className="carousel-item">
        //                 <img src={camp} className="d-block w-100" alt="..." />
        //                 <div className="layer"></div>
        //             </div>
        //             <div className="carousel-item">
        //                 <img src={proposal} className="d-block w-100" alt="..." />
        //                 <div className="layer"></div>
        //             </div>
        //         </div>
        //         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span className="sr-only">Previous</span>
        //         </a>
        //         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span className="sr-only">Next</span>
        //         </a>
        //     </div>
        // </div >
    )
}