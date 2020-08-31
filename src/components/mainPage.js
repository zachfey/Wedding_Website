import React from 'react'
import skyloft from '../images/Banner_Photos/DSC06370.jpg';
import petrified from '../images/Banner_Photos/DSC06471.jpg';
import petrified2 from '../images/Banner_Photos/DSC06511.jpg';
import sanFran from '../images/Banner_Photos/IMG_1346.jpg';
import arizona from '../images/Banner_Photos/IMG_2318.jpg';
import ring from '../images/Banner_Photos/IMG_2457.jpg';
import camp from '../images/Banner_Photos/IMG_2540.jpg';
import proposal from '../images/Banner_Photos/proposal.jpg';
require('./mainPage.css')

export default function MainPage() {
    return (
        < div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
            <div class="carousel-inner">
                <div class="overlay-top">
                    <h2 class="ourNames">Zach + Katie</h2>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-none">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Location</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Acoomodation</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">RSVP</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Regisry</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="overlay-bottom">
                    <h1 class="text-center">We're Engaged!</h1>
                    <p class="text-center">Tying the knot October 30th, 2021</p>
                </div>
                <div class="carousel-filter">
                    <div class="carousel-item active">
                        <img src={skyloft} class="d-block w-100" alt="..." />
                        <div class="layer"></div>
                    </div>
                    <div class="carousel-item">
                        <img src={petrified} class="d-block w-100" alt="..." />
                        <div class="layer"></div>
                    </div>
                    <div class="carousel-item">
                        <img src={petrified2} class="d-block w-100" alt="..." />
                        <div class="layer"></div>
                    </div>
                    <div class="carousel-item">
                        <img src={sanFran} class="d-block w-100" alt="..." />
                        <div class="layer"></div>
                    </div>
                    <div class="carousel-item">
                        <img src={arizona} class="d-block w-100" alt="..." />
                        <div class="layer"></div>
                    </div>
                    <div class="carousel-item">
                        <img src={ring} class="d-block w-100" alt="..." />
                        <div class="layer"></div>
                    </div>
                    <div class="carousel-item">
                        <img src={camp} class="d-block w-100" alt="..." />
                        <div class="layer"></div>
                    </div>
                    <div class="carousel-item">
                        <img src={proposal} class="d-block w-100" alt="..." />
                        <div class="layer"></div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div >
    )
}