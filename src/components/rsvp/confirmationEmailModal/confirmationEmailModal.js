
import React from "react";
import { Button, Modal } from 'react-bootstrap'


class ConfirmationEmailModal extends React.Component {
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
        this.props.handleConfirmationEmailModalClose();
        this.setState({ show: false });
    };

    render() {
        return (
            <>
                <Modal show={this.state.show} onHide={this.handleClose} keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Your email has been sent!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p> 
                            We'll reach out to you soon!
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

export default ConfirmationEmailModal;