
import React from "react";
import { Button, Modal } from 'react-bootstrap'


class ConfirmationRSVPModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }

        this.handleClose = this.handleClose.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({ show: props.show });
    }

    handleClose = () => {
        this.props.handleConfirmationModalClose();
        this.setState({ show: false });
    };

    render() {
        return (
            <>
                <Modal show={this.state.show} onHide={this.handleClose} keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thank You For Your RSVP!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p> 
                            Your RSVP has been recieved. Thank you!!
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

        );
    }
}

export default ConfirmationRSVPModal;