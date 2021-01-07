import React from "react";
import RSVPLookupModal from './rsvpLookupModal/rsvpLookupModal';
import RSVPUpdateModal from './rsvpUpdateModal/rsvpUpdateModal';
const axios = require("axios").default;
require('./rsvp.css')


const REACT_APP_RSVP_URL_DEV="https://0mggls4coa.execute-api.us-east-1.amazonaws.com/dev/rsvp"
class RSVP extends React.Component {
    constructor(props) {
        super()
        this.state = {
            reservation: [],
            showRSVPUpdateModal: false,
            showRSVPLookupModal: false
        }

        this.handleReturnedReservation = this.handleReturnedReservation.bind(this);
        this.handleUpdatedReservation = this.handleUpdatedReservation.bind(this);
    }

    componentWillReceiveProps(props) {
        if (props.showRSVPLookupModal){
            this.setState({showRSVPLookupModal: true})
            props.resetShowRSVPModal();
        };
    }

    handleReturnedReservation(reservation){
        this.setState({showRSVPLookupModal: false, reservation: reservation, showRSVPUpdateModal: true});
    }

    handleUpdatedReservation(reservation){
        this.setState({showRSVPUpdateModal: false, reservation: reservation})
    }

    render() {
        return (
            <div>
                <RSVPLookupModal openModal={this.state.showRSVPLookupModal} key="lookupModal" handleReturnedReservation={this.handleReturnedReservation}></RSVPLookupModal>
                {this.state.reservation ? <RSVPUpdateModal show={this.state.showRSVPUpdateModal} key="udpateModal" reservation={this.state.reservation} handleUpdatedReservation={this.handleUpdatedReservation}></RSVPUpdateModal> : null}
            </div>
        );
    }

}
export default RSVP;