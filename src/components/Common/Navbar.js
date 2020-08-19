import React, { Component } from 'react';
import { MdClose, MdMenu, MdLocationOn, MdKeyboardArrowDown } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { connect } from "react-redux";


class Navbar extends Component {

  state = {
    headerRef: React.createRef(),
    height: 0,
    mobile: false
  };


  componentDidMount() {
    this.windowResize();
    window.addEventListener("resize", this.windowResize);
  }

  windowResize = () => {
    const height = this.state.headerRef.current ? this.state.headerRef.current.getBoundingClientRect().height - 5 : 0;
    this.setState({ height })
  }

  render() {
    const { mode } = this.props;

    if (mode === "homepage") {
      return (
        <React.Fragment>
          <div className="container-fluid bg-white box-shadow" id="menu" ref={this.state.headerRef} >
            <div className="row navbar-margin align-items-center justify-content-center" style={{ paddingLeft: this.props.glutter, paddingRight: this.props.glutter }}>

              <div className="col col-md-auto">
                <a href="/" className="clearfix d-inline-block">
                  <img src={window.location.origin + "/img/logo.png"} id="the-logo" />
                </a>
              </div>

              <div className="col-auto col-md text-right text-md-left pl-md-0">
                <div className="row align-items-center">
                  <div className="col-auto d-md-none">
                    <MdMenu style={{ height: "22px", width: "22px" }} onClick={() => this.setState({ mobile: true })} />
                  </div>
                  <div className="col d-none d-md-block text-right bold link-black" style={{ fontSize: "0.85em" }}>
                    {mode === "homepage" &&
                      <React.Fragment>
                        <a href="#howitworks" className="mr-4">How It Works</a>
                        <a href="#pricing" className="mr-4 d-none d-lg-inline">Pricing</a>
                      </React.Fragment>
                    }
                    <a href="#faq" className="mr-4 clickable">FAQ</a>
                    <a href="#contact" className="clickable">Contact</a>
                  </div>
                  {mode === "homepage" &&
                    <div className="col-auto d-none d-md-block pr-0">
                      <a onClick={() => this.props.history.push('/book')}
                        className="book-now-button button button-medium button-mint" style={{ fontFamily: "PT Serif" }}>Book
                            Now</a>
                    </div>
                  }
                </div>
              </div>

            </div>
          </div>


          <div className={`container-fluid p-sm-5 ${this.state.mobile ? " visible" : ""}`} id="menu2">
            <div className="row p-lg-5 align-items-center relative" style={{ minHeight: "100%", minWidth: "100%" }}>
              <div className="col-12 pl-5 pl-md-0 col-md-5 pr-md-5">
                <a className="book-now-button link-big link-mint2 mb-4 mb-md-0 d-md-none"
                  onClick={() => this.props.history.push('/book')} >Book Now</a>
                <a className="link-big mb-4 mb-md-0" onClick={() => this.setState({ mobile: false })} href="#howitworks">How It Works</a>
                <a className="link-big mb-4 mb-md-0" onClick={() => this.setState({ mobile: false })} href="#pricing">Pricing</a>
                <a className="link-big mb-4 mb-md-0" onClick={() => this.setState({ mobile: false })} href="#faq">FAQ</a>
                <a className="link-big mb-4 mb-md-0" onClick={() => this.setState({ mobile: false })} href="#contact">Contact</a>
              </div>
              <span className="mint bold" id="closemenu" onClick={() => this.setState({ mobile: false })}><MdClose /></span>
            </div>
          </div>


          <div className="head-spacer d-block mb-1" style={{ height: this.state.height }}></div>

        </React.Fragment >
      );
    }
    else if (mode === "bookpage") {
      return (
        <React.Fragment>
          <div className="bg-black container-fluid" id="filters" ref={this.state.headerRef}>
            <div className="row justify-content-center align-items-center" style={{ fontSize: "16px", paddingLeft: this.props.glutter, paddingRight: this.props.glutter }}>

              <div className="col col-md-auto mr-auto mb-2">
                <a onClick={() => this.props.history.push('/')} className="clearfix d-inline-block clickable">
                  <img src={window.location.origin + "/img/logo-white.png"} id="the-logo" />
                </a>
              </div>

              <div className="col-auto pr-2 pr-md-4 align-items-center">
                <div className="filter-container pt-3 pb-3" id="filter-dates-container">
                  <span className="fa fa-close mr-2 reset-filter clear-date" rel="filter-dates"></span>
                  <div className="d-inline-block filter clickable hover-mint" id="filter-dates">
                    <GoCalendar style={{ fontSize: "16px", color: "#e7ce99" }} className="mr-2 mb-1" />
                    <span className="date-label">All Dates</span>
                    <MdKeyboardArrowDown className="mr-2" />
                  </div>
                </div>
              </div>
              <div className="col-auto pl-md-4 align-items-center">
                <div className="filter-container pt-3 pb-3" id="filter-locations-container">
                  <span className="fa fa-close mr-2 reset-filter clear-location" rel="filter-locations"></span>
                  <div className="d-inline-block filter clickable hover-mint" id="filter-locations">
                    <MdLocationOn style={{ fontSize: "16px", color: "#e7ce99" }} className="mr-2 mb-1" />
                    <span className="date-label">All Areas</span>
                    <MdKeyboardArrowDown className="mr-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="head-spacer d-block mb-1" style={{ height: this.state.height }}></div>
        </React.Fragment>
      );
    } else if (mode === "eventpage") {
      return (
        <React.Fragment>
          <div className="container-fluid bg-white box-shadow" id="menu" ref={this.state.headerRef} >
            <div className="eventpage row navbar-margin align-items-center justify-content-center" style={{ paddingLeft: this.props.glutter, paddingRight: this.props.glutter }}>

              <div className="col col-md-auto">
                <a onClick={() => this.props.history.push('/')} className="clearfix d-inline-block clickable">
                  <img src={window.location.origin + "/img/logo.png"} id="the-logo" />
                </a>
              </div>

              <div className="col-auto col-md text-right text-md-left pl-md-0">
                <div className="row align-items-center">
                  <div className="col d-block text-right bold link-black" style={{ fontSize: "0.85em" }}>
                    <a href="#faq" className="mr-4 clickable">FAQ</a>
                    <a href="#contact" className="clickable">Contact</a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="head-spacer d-block mb-1" style={{ height: this.state.height + 2 }}></div>

        </React.Fragment >
      );
    }
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
)(Navbar);