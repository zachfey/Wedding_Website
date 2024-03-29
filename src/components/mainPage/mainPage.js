import React from 'react';
import { Container, Image } from 'react-bootstrap';
import pageImage from "../../images/engagement_photos/EngagementPhotos-71-cropped.jpg";
require('./mainPage.scss')

export default function MainPage(props) {
    return (
        <Container fluid>
        <Image src={pageImage} rounded fluid id="mainPage-image"/>
            <Container fluid>
                <div className="text-container">
                    <p>
                        Katie and Zach met in January, 2014 while they were both in college. Katie was finishing up her last semester of her Bachelor of Science in 
                        Respiratory Therapy and Zach had another year left in his Bachelor of Science in Chemical Engineering. They met at Ri Ra Irish Pub in midtown, Atlanta.
                    </p>
                    <p>
                        When Zach moved to Louisiana to start his career, they continued dating in a long-distance relationship. Although they didn't see each other all the 
                        time, they always had a great time together when they did. During this time, they made their first (of several) cross-country road trips out to San Francisco
                        to get Katie moved in for her first travel assignment. Apart from the trip back, they met up to go on cruises, ski trips, visit desert islands, and even went on a trip to Costa Rica.
                    </p>
                    <p>
                        In 2019, they were finally able to move in together in Roswell, GA and have been inseparable since. Zach finally worked up the courage to propose in March 2020
                        after a beautiful but difficult hike to the top of Mt LeConte in the Great Smoky Mountains National Park. Katie and Zach are now travelling the US while Katie 
                        takes travel assignments in different cities. So far they have lived in Salt Lake City, Utah and Portland, Maine.
                    </p>
                </div>
            </Container>
        </Container>
        
    )
}