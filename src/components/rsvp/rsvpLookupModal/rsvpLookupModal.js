
import React from "react";
import { Button, Modal, ProgressBar } from 'react-bootstrap'
const axios = require("axios").default;


const REACT_APP_RSVP_URL_DEV = "https://0mggls4coa.execute-api.us-east-1.amazonaws.com/dev/rsvp"
class RSVPLookupModal extends React.Component {
    constructor(props) {
        super()
        this.state = {
            formFirstName: '',
            formLastName: '',
            formReservationCode: '',
            returnedFirstName: '',
            returnedLastName: '',
            returnedAllowedPlusOnes: 0,
            show: props.openModal,
            valid: false,
            showCodeError: false,
            showNameError: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.getReservationInfo = this.getReservationInfo.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.checkIsValid = this.checkIsValid.bind(this);
    }

    componentWillReceiveProps(props) {
        if (props.closeModal) this.handleClose();
        if (props.openModal) {
            this.handleShow()
        } else {
            this.handleClose();
        };
    }

    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value }, () => this.checkIsValid())
    }

    getReservationInfo(event) {
        event.preventDefault();
        this.setState({ showCodeError: false, showNameError: false, showProgress: true });
        const firstName = this.state.formFirstName;
        const lastName = this.state.formLastName;
        const reservationCode = this.state.formReservationCode;
        console.log(`A form was submitted! Name: ${firstName} ${lastName}, Reservation Code: ${reservationCode}`);
        const getURL = reservationCode ? `/${reservationCode}` : `/${firstName}+${lastName}`;
        axios.get(REACT_APP_RSVP_URL_DEV + getURL).then(
            res => {
                this.setState({showProgress: false})
                if (res.data.statusCode === 200) {
                    this.props.handleReturnedReservation(res.data.body.Items);
                } else {
                    console.log('person not found');
                    if (reservationCode) {
                        this.setState({ showCodeError: true });
                    } else {
                        this.setState({ showNameError: true });
                    }
                }
            },
            err => {
                this.setState({showProgress: false})
                console.log('error', err);
            })
    }

    checkIsValid() {
        if ((this.state.formFirstName && this.state.formLastName) || this.state.formReservationCode) {
            this.setState({ valid: true })
        }
        else {
            this.setState({ valid: false })
        }
    }

    render() {
        return (
            <>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Find Your Reservation Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <label htmlFor="reservationCode">Reservation Code</label>
                                <input type="text" className="form-control" id="reservationCode" name="formReservationCode" value={this.state.formReservationCode} onChange={this.handleChange} />
                            </div>

                            <p> OR </p>

                            <div className="form-group">
                                <label htmlFor="formFirstName">First Name</label>
                                <input type="text" className="form-control" id="formFirstName" name="formFirstName" value={this.state.formFirstName} onChange={this.handleChange} />

                            </div>
                            <div className="form-group">
                                <label htmlFor="formLastName">Last Name</label>
                                <input type="text" className="form-control" id="formLastName" name="formLastName" value={this.state.formLastName} onChange={this.handleChange} />
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <p className="error" hidden={!this.state.showCodeError}>Reservation not found. Try re-entering the reservation code or looking up by name. If searching by name, ensure the "Reservation Code" field is empty.</p>
                        <p className="error" hidden={!this.state.showNameError}>Reservation not found. Try searching by nickname/full name, or looking up by code.</p>
                            <Button variant="primary" className="rsvp-lookup" disabled={!this.state.valid} onClick={this.getReservationInfo}>
                                Find Reservation
                            </Button>
                    </Modal.Footer>
                            <ProgressBar hidden={!this.state.showProgress} animated now={100} />
                </Modal>
            </>

        );
    }
}

export default RSVPLookupModal;