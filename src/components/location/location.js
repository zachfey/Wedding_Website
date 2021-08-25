import React from 'react';
import { Image, Container } from 'react-bootstrap';
import pageImage from "../../images/oakleafCottageBanner.jpg"
require('./location.scss')
export default function Location() {
    return (
        <Container fluid className="location-container">
            <div id="location">
                <Image className='oakleaf-image' src={pageImage}></Image>
            </div>
            <div>
                <h2 className="page-header">Location</h2>
                <p>The ceremony and reception will be held at</p>
                <h4>Oakleaf Cottage</h4>
                <p className="address">6979 Highway 136<br/>Trenton, GA 30752</p>
                <h5>Beginning at 5:00pm</h5>
            </div>
            <div id='directions'>
                <h2 className="page-header">Directions and Parking</h2>
                <p>
                    The venue is 20 minutes from Chattanooga and about a 2 hour drive from Atlanta. <b>We will provide a shuttle to and from the venue.</b> The pickup/dropoff point is the Moxy Downtown Chattanooga. Shuttle capacity is somewhat limited, so if you do not plan on drinking heavily, please consider driving. <b>If you choose to drive, please review the important parking instructions below.</b>
                    </p><p>
                    As you approach Lookout Mountain via 136, you will pass a neighborhood called Canyon Park Estates. The venue's sign is on the left side of the highway, before you round the bend to go up the mountain. 
                    </p><p>
                    Parking is to the left of the gates as you enter the driveway. DO NOT pass through the gates - this is for shuttle traffic only, as there is no parking available around the venue area. Please park, being mindful to leave room for others, and wait for our shuttle at the waiting area near the gate. As the driveway is also steep and one way, pedestrian traffic is not permitted on the driveway between the parking area and the venue. Please wait for a shuttle.
                    </p><p>
                    If you are handicapped or need assistance, please make arrangements with the venue ahead of time by emailing cottageatoakleaf@gmail.com
                </p>

                <div className='map-box'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.999655527129!2d-85.4936513844648!3d34.856235982379374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88604930acf27455%3A0x1e4674d8483403a!2sOakleaf%20Cottage!5e0!3m2!1sen!2sus!4v1629053855095!5m2!1sen!2sus" title="oakleaf" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </Container>
    )
}