import React from 'react';
import accommodationImage from '../images/mountainBackgroundCopy.jpg'
require('./accommodation.css')
export default function Accommodation() {
    return(
        <div class='accommodation-container'>
            <img src={accommodationImage} class="accommodation-image"></img>
        <div class='accommodation-details'>
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