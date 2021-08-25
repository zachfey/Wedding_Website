import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import image1 from '../../images/gallery/EngagementPhotos-2.jpg';
import image2 from '../../images/gallery/EngagementPhotos-24.jpg';
import image3 from '../../images/gallery/EngagementPhotos-73.jpg';
import image4 from '../../images/gallery/EngagementPhotos-120.jpg';
import image5 from '../../images/gallery/EngagementPhotos-130.jpg';
import image6 from '../../images/gallery/EngagementPhotos-141.jpg';
import image7 from '../../images/gallery/EngagementPhotos-168.jpg';
import image8 from '../../images/gallery/EngagementPhotos-173.jpg';
import image9 from '../../images/gallery/EngagementPhotos-198.jpg';
require('./gallery.scss');
export default function Location() {
    const carouselImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
    return (
        <Container fluid className="location-container">
            <Carousel>
                {carouselImages.map((image, index) => {
                    return (
                        <Carousel.Item className='gallery-photo' key={index}>
                            <img
                                src={image}
                                className="contain"
                                alt={'gallery-photo-' + index}
                            />
                        </Carousel.Item>
                    )
                })}

            </Carousel>
        </Container>
    )
}