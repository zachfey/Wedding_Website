import React from 'react';
import { Container, Button } from 'react-bootstrap';
require('./registry.scss')

export default function Registry() {
    return (
        <Container fluid className='registry-container'>
            <h2 className="page-header">Registry</h2>
            <div className="text-container">
                <p>
                We are honored to share our special day with you. Your presence is our gift!
                </p>
                <p>
                We're fortunate to already have everything we need to fill our home, but we will have a "honeymoon fund" box at the wedding if you would like to contribute.
                </p>
                <p>
                Contributions are not expected, but are greatly appreciated! If you would like to contribute but prefer to do so online, we've setup a Honeyfund where you can select what your contribution will be put toward.
                </p>
                <p>
                Feel free to reach out to us if you need more info about how it works.
                </p>
                
                <a href='https://honeyfund.com/wedding/fey-hornaday-10-30-2021' rel="noopener noreferrer" target="_blank" >
                    <Button >Honeyfund Wish List</Button>
                </a>
            </div>
        </Container>
        
    )
}