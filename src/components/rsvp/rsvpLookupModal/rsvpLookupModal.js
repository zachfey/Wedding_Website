
import React from "react";
import { Button, Modal, ProgressBar } from 'react-bootstrap'
const axios = require("axios").default;


const REACT_APP_RSVP_URL_DEV = "https://0mggls4coa.execute-api.us-east-1.amazonaws.com/dev/rsvp"
const REACT_APP_EMAIL = "https://0mggls4coa.execute-api.us-east-1.amazonaws.com/dev/email"
class RSVPLookupModal extends React.Component {
    constructor(props) {
        super()
        this.state = {
            formFirstName: '',
            formLastName: '',
            formReservationCode: '',
            formEmailBody: '',
            returnedFirstName: '',
            returnedLastName: '',
            returnedAllowedPlusOnes: 0,
            show: props.openModal,
            valid: false,
            showCodeError: false,
            showNameError: false,
            showEmailError: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.getReservationInfo = this.getReservationInfo.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.checkIsValid = this.checkIsValid.bind(this);
        this.email = this.email.bind(this);
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
        const firstName = this.state.formFirstName.trim();
        const lastName = this.state.formLastName.trim();
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

    email(event) {
        event.preventDefault();
        this.setState({ showEmailError: false, showProgress: true });
        const firstName = this.state.formFirstName.trim();
        const lastName = this.state.formLastName.trim();
        const messageBody = this.state.formEmailBody.trim();
        console.log(`A form was submitted! Name: ${firstName} ${lastName}, Message Body: ${messageBody}`);
        let message = `${firstName} ${lastName}: ${messageBody}`
        axios.post(REACT_APP_EMAIL, {message}).then(
            res => {
                this.setState({showProgress: false})
                if (res.data.statusCode === 200) {
                    this.props.handleSuccessfulEmail();
                } else {
                    console.log('email error');
                    this.setState({showEmailError: true});
                }
            },
            err => {
                this.setState({showProgress: false})
                this.setState({showEmailError: true});
                console.log('error', err);
            })
        console.log(this.state.formFirstName, " ", this.state.formLastName, " sending email with body: ", this.state.formEmailBody)
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
                        <div hidden={!this.state.showNameError}>
                            <p className="error">
                                Reservation not found, try searching by your nickname or full name.
                            </p>
                            <p>
                                If you're still having issues, feel free to let Zach and Katie what's going on.
                            </p>
                            <textarea
                            placeholder="Let Zach and Katie know what's happening"
                            id="email-body" 
                            onChange={this.handleChange} 
                            name="formEmailBody" 
                            value={this.state.formEmailBody}
                            />
                        </div>
                        <Button variant="primary" hidden={!this.state.showNameError} className="send-email" disabled={!this.state.valid} onClick={this.email}>
                            Email Katie and Zach
                        </Button>
                        <Button variant="primary" className="rsvp-lookup" disabled={!this.state.valid} onClick={this.getReservationInfo}>
                            Find Reservation
                        </Button>
                        <div hidden={!this.state.showEmailError}>
                            <p className="error">
                                Sorry, your email was not sent!
                            </p>
                        </div>
                    </Modal.Footer>
                            <ProgressBar hidden={!this.state.showProgress} animated now={100} />
                </Modal>
            </>

        );
    }
}

export default RSVPLookupModal;