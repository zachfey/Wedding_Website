import React from 'react';
import { Container, Image } from 'react-bootstrap';
require('./dressCode.scss')

export default function DressCode() {
    return (
        <Container fluid className='dressCode-container'>
            <h2 className="page-header">Dress Code</h2>
            <div className="text-container">
                <p>This is an outdoor venue and there will be gravel - please keep this in mind when choosing your footwear!</p>
                <p>We want everyone to be comfortable and looking sharp, so the dress code is: </p>
                <h5>Dressy Casual</h5>
                <p>Here are a few photos for inspiration. Feel free to wear a suit if you'd like!</p>
                <Image fluid src='https://media-api.xogrp.com/images/cd77b698-7ebd-474a-8fdd-766d252252a6~rs_2560.h'/>
            </div>
        </Container>
        
    )
}