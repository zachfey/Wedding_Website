
import React from "react";
import { Button, Modal, Table, Form, FormCheck } from 'react-bootstrap'
const axios = require("axios").default;


const REACT_APP_RSVP_URL_DEV = "https://0mggls4coa.execute-api.us-east-1.amazonaws.com/dev/rsvp"
class CeremonyRSVPModal extends React.Component {
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

    handleRSVPChange(index, event) {
        const target = event.target;
        let attending = false;
        if (target.name == 'vaccinated-attending' + index) {
            attending = true;
        }
        this.setState(prevState => {
            let reservation = prevState.reservation;
            reservation[index] = Object.assign({}, prevState.reservation[index]);
            reservation[index].RSVPd.BOOL = attending;
            return { reservation: reservation };
        })
    }

    renderHeaders() {
        let headers = ['Name', 'Vaccinated & Attending', 'Not Attending', 'Plus One'];
        let tableHeaders=[];
        headers.forEach(header => {
            tableHeaders.push(<th>{header}</th>)
        })
        return tableHeaders;
    }

    displayReservation() {
        let returnArray = []
        this.state.reservation.forEach((person, index) => {
            returnArray.push(this.personDetails(person, index, false))
        })
        return returnArray;
    }

    personDetails(person, index) {
        const firstName = person.FirstName.S;
        const lastName = person.LastName.S;
        return (
            <tr>
                <td>
                    {`${firstName} ${lastName}`}
                </td>
                <td>
                    <FormCheck
                    className="text-center"
                    type="radio"
                    key={'updateRSVPFormCheck' +  index}
                    name={'vaccinated-attending' + index}
                    onClick={this.handleRSVPChange.bind(this, index)}
                    checked={this.state.reservation[index].RSVPd.BOOL} />
                </td>
                <td>
                    <FormCheck
                    className="text-center"
                    type="radio"
                    key={'updateRSVPFormCheck' +  index}
                    name={'not-attending' + index}
                    onClick={this.handleRSVPChange.bind(this, index)}
                    checked={!this.state.reservation[index].RSVPd.BOOL} />
                </td>
                {person.AllowedPlusOne.BOOL ?
                    <td class="plus-one-name">
                        <Form.Group key={'updateRSVPFormGroup' +  index} controlId={'plusOne' + index}>
                            <Form.Control
                                key={'updateRSVPPlusOne' + index}
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
                        <h4>IMPORTANT (please read)</h4>
                        <p> 
                            Thank you for making our big, beautiful party safe, carefree, and revelatory for everyone by being fully vaccinated 
                            and keeping up with any boosters that may or may not be recommended over these next few months.
                        </p>
                        <p>
                            If you are not vaccinated, please RSVP "Not Attending" (we'll miss you) or reach out to us directly before you RSVP. 
                            Having everyone safely vaccinated is very important to us. 
                        </p>
                        <p>
                            Stay safe, we are so excited to party!!
                        </p>
                        <Table striped hover borderless>
                            <thead className="rsvp-headers">
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
                            Save RSVP
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

export default CeremonyRSVPModal;