import React, { Component } from 'react';
import { FaCheck } from 'react-icons/fa';
import { connect } from "react-redux";

class EventInfoMain extends Component {

  render() {
    const { event } = this.props;

    return (
      <React.Fragment>
        <div className="container-fluid" id="session-title">
          <div className="row">
            <div className="col-12 p-3 pt-4 mt-2 link-mint2">

              <p className="mb-4 pb-3 pr-4 heading-large" style={{ lineHeight: 1.3 }}>
                {event.info}
              </p>

              <div className="info-box">
                <div className="pb-2 border-bottom">
                  <div className="heading-decoration black">Your Shoott Session</div>
                </div>
                <div className="p-2">
                  <div className="row exclusion mt-2">
                    <div className="col-auto pr-0">
                      <FaCheck className="mint" />
                    </div>
                    <div className="col">
                      30 minute personal photo shoot
                    </div>
                  </div>
                  <div className="row exclusion mt-2">
                    <div className="col-auto pr-0">
                      <FaCheck className="mint" />
                    </div>
                    <div className="col">
                      Social distancing friendly!
                    </div>
                  </div>
                  <div className="row exclusion mt-2">
                    <div className="col-auto pr-0">
                      <FaCheck className="mint" />
                    </div>
                    <div className="col">
                      Complimentary to book, no obligation to buy photos
                    </div>
                  </div>
                  <div className="row exclusion mt-2">
                    <div className="col-auto pr-0">
                      <FaCheck className="mint" />
                    </div>
                    <div className="col">
                      We'll match you with a photographer from our hand-picked team of friendly, seriously talented
                      pros. Expect gorgeous, Insta-worthy results ;)
                    </div>
                  </div>
                </div>
              </div>


              <div className="info-box mt-4 mb-md-2">
                <div className="pb-2 border-bottom">
                  <div className="heading-decoration black">Meeting Point</div>
                </div>
                <div className="p-2">
                  Exact meeting point will be provided with your booking confirmation
                </div>
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
)(EventInfoMain);