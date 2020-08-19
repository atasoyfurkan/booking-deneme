import React, { Component } from 'react';
import { connect } from "react-redux";

class Banner extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid bg-black bg-photo-static pt-3 pb-3" id="banner"
          style={{ backgroundImage: "url(img/bg-login.jpg)", position: "relative", zIndex: 1 }}>


          <div className="vidbg-container">
            <video
              autoPlay
              muted
              loop
              style={{ opacity: 1, width: "100%", height: "auto" }}
            >
              <source src="img/main_video.mp4" type="video/mp4" />
            </video>
            <div className="vidbg-overlay" style={{ background: "rgba(0,0,0,0.4)" }}></div>
          </div>

          <div className="row pt-4 pt-lg-5 pb-4 pb-lg-5" style={{ paddingLeft: this.props.glutter, paddingRight: this.props.glutter }}>

            <div className="col col-lg-7 offset-lg-1 text-center text-lg-left mt-3 mb-4" id="homepage-above-fold">

              <div>
                <div className="heading-xlarge" id="main-title">High quality photos <span
                  className="d-lg-block"><i>without</i> the high prices</span></div>
                <p className="mt-3 mt-md-4">30 minute sessions with the best photographers in Houston.</p>
                <p className="mb-3">Pay only for the pics you love, <span className="d-inline-block">$15 each or
                          less.</span></p>
              </div>
              <a onClick={() => this.props.history.push('/book')} id="main-button"
                className="book-now-button button button-mint button-large mt-2 mt-sm-3 mt-lg-4 rounded box-shadow">Book
                  Now</a>

            </div>

          </div>

        </div>
      </React.Fragment >
    );
  }
}

const mapStateToProps = state => {
  return {
    glutter: state.main.glutter,
    history: state.main.history
  }
}

export default connect(
  mapStateToProps
)(Banner);