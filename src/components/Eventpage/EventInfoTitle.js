import React, { Component } from 'react';
import { connect } from "react-redux";

class EventInfoTitle extends Component {

  render() {
    const { event } = this.props;

    return (
      <React.Fragment>
        <div className="container-fluid bg-black" id="title-bar">
          <div className="row">
            <div className="col pt-3 pt-md-4 mt-1">
              <div className="heading-decoration mb-1" style={{ color: "#c5c5c5" }}>
                Mini Photo Session
                </div>
              <div className="pb-3 pb-md-4 mb-1 heading-xlarge" style={{ borderBottom: "1px solid #555" }}>
                {event.get("name")}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black container-fluid box-shadow pt-2" id="booking-button-bar">
          <div className="row align-items-center">
            <div className="col-auto">
              <div onClick={this.props.openModal} className="button button-large button-mint pl-3 pr-3 rounded open-booksession">Book Now</div>
            </div>
            <div className="col pt-2 pb-2 pl-0 pl-md-2" style={{ fontSize: "0.9em" }}>
              <div><span className="fa fa-calendar mint mb-1"></span>
                {event.get("availableDates").length} Dates, from <b>{new Date(event.get("availableDates").sort()[0]).toDateString().substr(0, 11)}</b>
              </div>
              <div><span className="fa fa-ticket mint"></span> No Booking Fee
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.main.event
  }
}

export default connect(
  mapStateToProps
)(EventInfoTitle);