import React, { Component } from 'react';
import { connect } from "react-redux";

class BottomBookNow extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid bg-photo"
          style={{ backgroundImage: "url('img/bg-photog.jpg')" }}>
          <div className="row pt-4 pb-4 pt-5 pb-5" style={{ paddingLeft: this.props.glutter, paddingRight: this.props.glutter }}>
            <div className="col text-center pt-3 pb-3">
              <div className="heading-xxlarge mb-md-2">Ready to get better photos?</div>
              <a onClick={() => this.props.history.push('/book')}
                className="book-now-button button button-xlarge button-mint rounded mt-4 mb-2 box-shadow">Book Now -
                    It's Free!</a>
            </div>
          </div>
        </div>

        <div id="book-now-follow" className="d-md-none box-shadow">
          <a onClick={() => this.props.history.push('/book')}
            className="book-now-button button button-xlarge button-mint text-center d-block">Book Now</a>
        </div>
      </React.Fragment>
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
)(BottomBookNow);