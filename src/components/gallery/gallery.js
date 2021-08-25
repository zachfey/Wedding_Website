import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
const image1 = 'https://engagement-photos-zach-and-katie.s3.amazonaws.com/EngagementPhotos-2.jpg';
const image2 = 'https://engagement-photos-zach-and-katie.s3.amazonaws.com/EngagementPhotos-24.jpg';
const image3 = 'https://engagement-photos-zach-and-katie.s3.amazonaws.com/EngagementPhotos-73.jpg';
const image4 = 'https://engagement-photos-zach-and-katie.s3.amazonaws.com/EngagementPhotos-120.jpg';
const image5 = 'https://engagement-photos-zach-and-katie.s3.amazonaws.com/EngagementPhotos-130.jpg';
const image6 = 'https://engagement-photos-zach-and-katie.s3.amazonaws.com/EngagementPhotos-141.jpg';
const image7 = 'https://engagement-photos-zach-and-katie.s3.amazonaws.com/EngagementPhotos-168.jpg';
const image8 = 'https://engagement-photos-zach-and-katie.s3.amazonaws.com/EngagementPhotos-173.jpg';
const image9 = 'https://engagement-photos-zach-and-katie.s3.amazonaws.com/EngagementPhotos-198.jpg';
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