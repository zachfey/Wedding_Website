import React from 'react';
import backgroundImage from '../images/mountainBackgroundCopy.jpg'
require('./location.css')
export default function Location() {
    return(
        <div class='location-container'>
            <img src={backgroundImage} class="location-image"></img>
        <div class='location-details'>
            <h3 id="ceremony">The Ceremony and Reception</h3>
            <h5>4:00pm</h5>
            <p class="address">Oakleaf Cottage</p>
            <p class="address">6979 GA-136</p>
            <p class="address">Trenton, GA 30752</p>
            <a href="https://g.page/OakleafCottage?share" target="_blank">View on Map</a>
        </div>
        </div>
    )
}