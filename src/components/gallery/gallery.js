import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import image1 from '../../images/gallery/EngagementPhotos-10.jpg';
import image2 from '../../images/gallery/EngagementPhotos-73.jpg';
import image3 from '../../images/gallery/EngagementPhotos-128.jpg';
import image4 from '../../images/gallery/EngagementPhotos-163.jpg';
import image5 from '../../images/gallery/EngagementPhotos-165.jpg';
require('./gallery.scss');
export default function Location() {
    const carouselImages = [image1, image2, image3, image4, image5];
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