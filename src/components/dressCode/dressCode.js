import React from 'react';
import { Container } from 'react-bootstrap';
require('./dressCode.scss')

export default function DressCode() {
    return (
        <Container fluid className='dressCode-container'>
            <h2 className="page-header">Dress Code</h2>
            <div className="text-container">
                <p>This is an outdoor venue and there will be gravel - please keep this in mind when choosing your footwear!</p>
                <p>The dress code is:</p>
                <h5>Dressy Casual</h5>
            </div>
        </Container>
        
    )
}