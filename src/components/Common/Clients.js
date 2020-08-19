import React, { Component } from 'react';
import { connect } from "react-redux";

class Clients extends Component {

  render() {
    return (
      <div className="container-fluid text-center bg-grey p-3" id="logos">

        <div className="row align-items-center justify-content-center pb-2 pt-md-2" style={{ paddingLeft: this.props.glutter, paddingRight: this.props.glutter }}>
          <div className="col-12 col-lg-auto heading-medium pt-1 pb-3 pb-md-0 pl-lg-4 pr-lg-4">
            Our pros have shot for:
          </div>
          <div className="col-4 col-md-2 col-lg pl-3 pr-3 pb-2 pb-md-0 pl-lg-4 pr-lg-4">
            <img src="https://shoott.com/wp-content/uploads/2018/10/ELLE_logo-e1548783751288.jpg" className="logo-mini" />
          </div>
          <div className="col-4 col-md-2 col-lg pl-3 pr-3 pl-lg-4 pr-lg-4">
            <img src="https://shoott.com/wp-content/uploads/2018/10/dazed-e1538994262955.png" className="logo-mini" />
          </div>
          <div className="col-4 col-md-2 col-lg pl-3 pr-3 pl-lg-4 pr-lg-4">
            <img src="https://shoott.com/wp-content/uploads/2018/10/forbes-logo-e1538985312850.png"
              className="logo-mini" />
          </div>
          <div className="col-4 col-md-2 col-lg pl-3 pr-3 pl-lg-4 pr-lg-4">
            <img src="https://shoott.com/wp-content/uploads/2018/10/Gq-logo.jpg" className="logo-mini" />
          </div>
          <div className="col-4 col-md-2 col-lg pl-3 pr-3 pl-lg-4 pr-lg-4">
            <img src="https://shoott.com/wp-content/uploads/2019/01/BuzzFeed-logo-vector-e1548776805474.png"
              className="logo-mini" />
          </div>
          <div className="col-4 col-md-2 col-lg pl-3 pr-3 pl-lg-4 pr-lg-4">
            <img src="https://shoott.com/wp-content/uploads/2019/01/Tumblr_static_4wf9nlcyecysgckkgskwc0ww8-e1548776901473.png"
              className="logo-mini" />
          </div>
        </div>

      </div>
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
)(Clients);