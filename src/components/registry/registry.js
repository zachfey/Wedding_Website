import React from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';
require('./registry.scss')

export default function Registry() {
    return (
        <Container fluid className='registry-container'>
            <Jumbotron className="story-jumbotron">
                <p>
				We are honored you will share in our special day. Your presence is our gift!
				</p>
                <p>
				We're lucky to already have everything we need to fill our home, so please enjoy browsing our Honeyfund wish list, where you can contribute funds to our dream honeymoon or a downpayment on our new home! (It’s safe, secure, and easy.) Feel free to reach out to us if you need more info about how it works.
				</p>
				
				<a href='https://honeyfund.com/wedding/fey-hornaday-10-30-2021' rel="noopener noreferrer" target="_blank" >
					<Button >Honeyfund Wish List</Button>
				</a>
            </Jumbotron>
        </Container>
        
    )
}