
import React from "react";
import { Button, Modal, Table, Form, FormCheck } from 'react-bootstrap'
const axios = require("axios").default;


const REACT_APP_RSVP_URL_DEV = "https://0mggls4coa.execute-api.us-east-1.amazonaws.com/dev/rsvp"
class RSVPLookupModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reservation: props.reservation ?? []
        }

        this.handlePlusOneChange = this.handlePlusOneChange.bind(this);
        this.updateReservation = this.updateReservation.bind(this);
        this.displayReservation = this.displayReservation.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.personDetails = this.personDetails.bind(this);
        this.handleRSVPChange = this.handleRSVPChange.bind(this);
    }

    headers = ['Name', 'RSVP', 'Plus One']

    componentWillReceiveProps(props) {
        this.setState({ reservation: props.reservation, show: props.show });
    }

    handleClose = () => {
        this.props.handleUpdatedReservation(this.props.reservation);
        this.setState({ show: false });
    };

    handlePlusOneChange(index, event) {
        const target = event.target;
        const value = target.value;
        this.setState(prevState => {
            let reservation = Object.assign({}, prevState.reservation);
            reservation[index].PlusOne.S = value;
            return reservation;
        })
    }

    handleRSVPChange(index, rehearsalRSVP, event) {
        const target = event.target;
        let value = target.checked;
        this.setState(prevState => {
            let reservation = prevState.reservation;
            reservation[index] = Object.assign({}, prevState.reservation[index]);
            if (rehearsalRSVP) {
                reservation[index].RehearsalRSVP.BOOL = value;
            } else {
                reservation[index].RSVPd.BOOL = value;
            }
            return { reservation: reservation };
        })
    }

    displayReservation() {
        let returnArray = []
        this.state.reservation.forEach((person, index) => {
            returnArray.push(this.personDetails(person, index, false))
        })
        return returnArray;
    }

    displayRehearsalReservation() {
        let returnArray = []
        this.state.reservation.forEach((person, index) => {
            if (person.RehearsalInvite.BOOL) {
                returnArray.push(this.personDetails(person, index, true))
            }
        })
        return returnArray;
    }

    personDetails(person, index, rehearsalRSVP) {
        const firstName = person.FirstName.S;
        const lastName = person.LastName.S;
        const tag = rehearsalRSVP ? 'reh' : 'cer'
        return (
            <tr>
                <td>{`${firstName} ${lastName}`}</td>
                <td><FormCheck
                    key={'updateRSVPFormCheck' + tag + index}
                    name={index}
                    onChange={this.handleRSVPChange.bind(this, index, rehearsalRSVP)}
                    checked={rehearsalRSVP ? this.state.reservation[index].RehearsalRSVP.BOOL : this.state.reservation[index].RSVPd.BOOL} /></td>
                {person.AllowedPlusOne.BOOL ?
                    <td>
                        <Form.Group key={'updateRSVPFormGroup' + tag + index} controlId={'plusOne' + index}>
                            <Form.Control
                                key={'updateRSVPPlusOne' + tag + index}
                                type="text"
                                placeholder="Plus One's Name"
                                onChange={this.handlePlusOneChange.bind(this, index)}
                                value={this.state.reservation[index].PlusOne.S} />
                        </Form.Group>
                    </td>
                    : <td />}
            </tr>
        )
    }

    renderHeaders() {
        let headers = []
        this.headers.forEach(header => {
            headers.push(<th>{header}</th>)
        })
        return headers;
    }

    updateReservation() {
        axios.put(REACT_APP_RSVP_URL_DEV, this.state.reservation)
            .then((res) => {
                console.log(res)
                //TODO error response
                this.props.handleUpdatedReservation(JSON.parse(res.config?.data))
            });
    }

    render() {
        return (
            <>
                <Modal show={this.state.show} onHide={this.handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>We Found Your Reservation!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>The following guests are invited to the Rehearsal Dinner on 10/29/2021 at Rehearsal Dinner Place</p>
                <Table striped hover borderless>
                            <thead>
                                <tr>
                                    {this.renderHeaders()}
                                </tr>
                            </thead>
                            <tbody>
                                {this.displayRehearsalReservation()}
                            </tbody>
                        </Table>
                <p>The following guests are invited to Ceremoney and Reception on 10/30/2021 at Oak Leaf Cottage</p>
                <Table striped hover borderless>
                            <thead>
                                <tr>
                                    {this.renderHeaders()}
                                </tr>
                            </thead>
                            <tbody>
                                {this.displayReservation()}
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.updateReservation}>
                            RSVP
                </Button>
                <Button variant="secondary" onClick={this.handleClose}>
                            Cancel
                </Button>
                    </Modal.Footer>
                </Modal>
            </>

        );
    }
}

export default RSVPLookupModal;