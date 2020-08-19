import React, { Component } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { connect } from "react-redux";

class Events extends Component {
  render() {
    const { mode, bg } = this.props;

    if (!this.props.allEvents) return <LoadingSpinner />

    return (
      <div className={`container-fluid pt-1 pt-md-3 pb-md-4 ${bg} ${!bg && mode === "homepage" ? "bg-grey" : "bg-white"}`} id="other-events-container">
        <div className="row justify-content-center text-center" style={{ paddingLeft: this.props.glutter, paddingRight: this.props.glutter }}>
          <div className="col-12 col-lg-11">


            {mode === "homepage" &&
              <div className="row pt-4 align-items-center pb-md-4" id="upcoming-events">

                <div className="col-12 col-md text-center text-md-left">
                  <div className="heading-xlarge pb-1 pb-md-0 mt-md-3">Next events in {this.props.allEvents[0].get("place")}</div>
                  <a className="clickable">
                    <div className="heading-decoration mt-2 link-mint2">Switch Location</div>
                  </a>
                </div>
                <div className="col-auto d-none d-md-block">
                  <a className="button button-xlarge button-mint rounded"
                    onClick={() => this.props.history.push('/book')} >View All Events</a>
                </div>
              </div>
            }
            {mode === "bookpage" &&
              <div className="row pt-4 pb-4 mt-md-2 mb-md-2 text-center align-items-center" id="upcoming-events">
                <div className="col-12 col-md">
                  <div className="heading-xlarge">Upcoming Events in {this.props.allEvents[0].get("place")}</div>
                </div>
              </div>
            }


            <div className="row link-black mb-4 mb-md-5" id="other-events">
              {this.props.allEvents.map((event, i) =>
                <div key={i} className="col-6 col-md-3 pt-4 mt-md-3 clickable">
                  <a onClick={() => this.props.history.push(`/event/${event.id}`)}
                    target="_blank">
                    <img
                      src={event.get("coverPhotoUrl")}
                      className="full-width rounded box-shadow" data-pin-nopin="true" />
                    <div className="heading-medium mt-2 mt-md-4">{event.get("name")}</div>
                    <div className="mt-2">
                      <strong>{event.get("availableDates").length} dates</strong>,
              from {new Date(event.get("availableDates").sort()[0]).toDateString().substr(0, 11)}
                    </div>
                  </a>
                </div>
              )}
            </div>

            {mode === "homepage" &&
              <div className="row mt-4 mt-md-0 mb-4">
                <div className="col-12 mt-2 mt-md-0 mb-2 text-center">
                  <a className="button button-xlarge button-mint rounded"
                    onClick={() => this.props.history.push('/book')}>View All Events</a>
                </div>
              </div>
            }
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    glutter: state.main.glutter,
    history: state.main.history,
    allEvents: state.main.allEvents
  }
}

export default connect(
  mapStateToProps
)(Events);