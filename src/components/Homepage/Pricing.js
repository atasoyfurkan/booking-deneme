import React, { Component } from 'react';
import { connect } from "react-redux";


class Pricing extends Component {

  render() {
    return (
      <div className="container-fluid bg-black bg-photo shadow pt-4 pt-md-5 pb-4 pb-md-5" id="pricing"
        style={{ backgroundImage: "url(img/bg-dark4.jpg)" }}>

        <div className="row align-items-center justify-content-center pt-md-4 pb-md-4" style={{ paddingLeft: this.props.glutter, paddingRight: this.props.glutter }}>
          <div className="col-12 col-md-auto">
            <div className="heading-medium text-center">Our pricing is simple:</div>
          </div>
          <div className="col-12 col-md-auto">
            <div className="row text-center mt-3 mt-md-0">
              <div className="col col-md-auto">
                <div className="heading-large mint d-md-inline-block mr-md-2">$15</div>
                      per photo
                  </div>
              <div className="col col-md-auto">
                <div className="heading-large mint d-md-inline-block mr-md-2">$120</div>
                      for any 10
                  </div>
              <div className="col col-md-auto">
                <div className="heading-large mint d-md-inline-block mr-md-2">$220</div>
                      for all 40+
                  </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    glutter: state.main.glutter
  }
}

export default connect(
  mapStateToProps
)(Pricing);