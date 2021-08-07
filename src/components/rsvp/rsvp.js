import React from "react";
import RSVPLookupModal from './rsvpLookupModal/rsvpLookupModal';
import CeremonyRSVPModal from './ceremonyRSVPModal/ceremonyRSVPModal';
import ConfirmationRSVPModal from './confirmationRSVPModal/confirmationRSVPModal';
require('./rsvp.scss')

class RSVP extends React.Component {
    constructor(props) {
        super()
        this.state = {
            reservation: [],
            showRSVPUpdateModal: false,
            showRSVPLookupModal: false,
            showCeremoneyRSVPModal: false,
            showConfirmationRSVPModal: false
        }

        this.handleReturnedReservation = this.handleReturnedReservation.bind(this);
        this.handleUpdatedReservation = this.handleUpdatedReservation.bind(this);
        this.handleConfirmationModalClose = this.handleConfirmationModalClose.bind(this);
    }

    componentWillReceiveProps(props) {
        if (props.showRSVPLookupModal){
            this.setState({showRSVPLookupModal: true})
            props.resetShowRSVPModal();
        };
    }

    handleReturnedReservation(reservation){
        //TODO network connection issue
        // this.setState({showRSVPLookupModal: false, reservation: reservation, showRSVPUpdateModal: true});
        this.setState({showRSVPLookupModal: false, reservation: reservation, showCeremoneyRSVPModal: true});
    }

    handleUpdatedReservation(reservation, confirmUpdate){
        this.setState({showCeremoneyRSVPModal: false, reservation: reservation})
        if (confirmUpdate) {
            this.setState({showConfirmationRSVPModal: true});
        }
    }

    handleConfirmationModalClose(){
        this.setState({showConfirmationRSVPModal: false})
    }

    render() {
        return (
            <div>
                <RSVPLookupModal openModal={this.state.showRSVPLookupModal} key="lookupModal" handleReturnedReservation={this.handleReturnedReservation}></RSVPLookupModal>
                {this.state.reservation ? <CeremonyRSVPModal show={this.state.showCeremoneyRSVPModal} key="udpateModal" reservation={this.state.reservation} handleUpdatedReservation={this.handleUpdatedReservation}></CeremonyRSVPModal> : null}
                <ConfirmationRSVPModal show={this.state.showConfirmationRSVPModal} key="confirmationModal" handleConfirmationModalClose={this.handleConfirmationModalClose}></ConfirmationRSVPModal>
            </div>
        );
    }

}
export default RSVP;