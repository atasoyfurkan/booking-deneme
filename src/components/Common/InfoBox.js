import React, { Component } from 'react';
import { connect } from "react-redux";


class InfoBox extends Component {

  render() {
    const { title, steps, icons, srcs } = this.props

    return (
      <div className="container-fluid bg-white pt-4 pb-4" id="howitworks">
        <div className="row mt-4 pb-2 mb-4 pt-1 justify-content-center" style={{ paddingLeft: this.props.glutter, paddingRight: this.props.glutter }}>
          <div className="col-12 col-md-11 col-lg-10 pt-md-2 pb-md-2">
            <div className="heading-xlarge mb-4 text-center">{title}</div>

            <div className="row pt-md-2">


              {steps.map((item, index) => {
                const Icon = icons && icons[index];
                return (
                  <div className="col-12 col-md pr-lg-4 pl-lg-4" key={index}>
                    <div className={`row justify-content-center ${index === 0 ? "" : "mt-3 mt-md-0"}`}>
                      < div className="col-3 d-md-block text-center pb-2">
                        {icons ? <Icon style={{ fontSize: "63px", color: "#f68622" }} /> : <img className="full-width" src={srcs[index]} />}
                      </div>
                      <div className="col col-md-12 pl-2 text-md-center">
                        {!icons && <div className="heading-decoration mb-1 mb-md-2">Step {index + 1}</div>}
                        <div className="heading-medium mb-2">{item.title}</div>
                        <p className="howitworks-text">{item.text}</p>
                      </div>
                    </div>
                  </div>
                )
              }
              )}
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
)(InfoBox);