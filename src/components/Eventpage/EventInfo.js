import React, { Component } from 'react';
import { connect } from "react-redux";
import EventCarousel from "./EventCarousel"
import EventInfoTitle from './EventInfoTitle';
import EventInfoMain from './EventInfoMain';
import EventInfoPricing from './EventInfoPricing';
import EventInfoRate from './EventInfoRate';
import EventInfoPolicy from './EventInfoPolicy';


class EventInfo extends Component {
  state = {
    containerRef: React.createRef(),
    containerBottom: 0,
  };

  async componentDidMount() {
    window.addEventListener("scroll", this.windowScroll);
  }

  windowScroll = () => {
    this.setState({ containerBottom: this.state.containerRef.current && this.state.containerRef.current.getBoundingClientRect().top });
  }

  render() {
    const { openModal } = this.props;

    return (
      <div id="desktop-container" className="container-fluid mt-lg-4 pt-lg-3 mb-lg-5 pb-lg-5">
        <div className="row justify-content-center exclusion" style={{ paddingLeft: this.props.glutter, paddingRight: this.props.glutter }}>

          <div className="col-12 pl-0 pr-0 col-md-4" id="main-images-container">
            <EventCarousel containerBottom={this.state.containerBottom} openModal={openModal} />
          </div>

          <div className="col-12 pl-0 pr-0 col-md-8 col-lg-7 bg-white" id="main-information-container" >
            <EventInfoTitle openModal={openModal} />
            <EventInfoMain />
            <EventInfoPricing />
            <EventInfoRate />
            <div style={{ height: 0, width: 0 }} ref={this.state.containerRef}></div>
            <EventInfoPolicy />

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
)(EventInfo);