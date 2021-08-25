import React from "react";
import RSVPLookupModal from './rsvpLookupModal/rsvpLookupModal';
import CeremonyRSVPModal from './ceremonyRSVPModal/ceremonyRSVPModal';
import ConfirmationRSVPModal from './confirmationRSVPModal/confirmationRSVPModal';
import ConfirmationEmailModal from './confirmationEmailModal/confirmationEmailModal';
require('./rsvp.scss')

class RSVP extends React.Component {
    constructor(props) {
        super()
        this.state = {
            reservation: [],
            showRSVPUpdateModal: false,
            showRSVPLookupModal: false,
            showCeremoneyRSVPModal: false,
            showConfirmationRSVPModal: false,
            showConfirmationEmailModal: false
        }

        this.handleReturnedReservation = this.handleReturnedReservation.bind(this);
        this.handleUpdatedReservation = this.handleUpdatedReservation.bind(this);
        this.handleConfirmationModalClose = this.handleConfirmationModalClose.bind(this);
        this.handleSuccessfulEmail = this.handleSuccessfulEmail.bind(this);
        this.handleConfirmationEmailModalClose = this.handleConfirmationEmailModalClose.bind(this);
    }

    componentWillReceiveProps(props) {
        if (props.showRSVPLookupModal){
            this.setState({showRSVPLookupModal: true})
            props.resetShowRSVPModal();
        };
    }

    handleReturnedReservation(reservation){
        //TODO network connection issue
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

    handleSuccessfulEmail(){
        this.setState({showRSVPLookupModal: false, showConfirmationEmailModal: true});
    }

    handleConfirmationEmailModalClose(){
        this.setState({showConfirmationEmailModal: false})
    }
    render() {
        return (
            <div>
                <RSVPLookupModal openModal={this.state.showRSVPLookupModal} key="lookupModal" handleReturnedReservation={this.handleReturnedReservation} handleSuccessfulEmail={this.handleSuccessfulEmail}></RSVPLookupModal>
                {this.state.reservation ? <CeremonyRSVPModal show={this.state.showCeremoneyRSVPModal} key="udpateModal" reservation={this.state.reservation} handleUpdatedReservation={this.handleUpdatedReservation}></CeremonyRSVPModal> : null}
                <ConfirmationRSVPModal show={this.state.showConfirmationRSVPModal} key="confirmationModal" handleConfirmationModalClose={this.handleConfirmationModalClose}></ConfirmationRSVPModal>
                <ConfirmationEmailModal show={this.state.showConfirmationEmailModal} key="confirmationEmailModal" handleConfirmationEmailModalClose={this.handleConfirmationEmailModalClose}></ConfirmationEmailModal>
            </div>
        );
    }

}
export default RSVP;