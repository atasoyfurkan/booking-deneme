import React, { Component } from 'react';
import { MdFlashOn, MdThumbUp, MdEuroSymbol } from "react-icons/md";
import { connect } from "react-redux";

import Navbar from "../components/Common/Navbar"
import CoronaMessage from "../components/Homepage/CoronaMessage"
import Banner from "../components/Homepage/Banner"
import Clients from "../components/Common/Clients"
import InfoBox from "../components/Common/InfoBox"
import Pricing from "../components/Homepage/Pricing"
import Events from "../components/Common/Events"
import Questions from "../components/Common/Questions"
import BottomBookNow from '../components/Homepage/BottomBookNow';
import Footer from '../components/Common/Footer';
import { howitworkstext } from "../texts.json"
import { whyustext } from "../texts.json"
import { setHistory } from '../store/configureStore';
import { FaRegCheckCircle } from 'react-icons/fa';


class Homepage extends Component {
  componentDidMount() {
    this.props.setHistory(this.props.history);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar mode="homepage" />
        <CoronaMessage />
        <Banner />
        <Clients />
        <InfoBox title={howitworkstext.title} steps={howitworkstext.steps} srcs={["img/icon-calendar.png", "img/icon-camera.png", "img/icon-laptop.png"]} />
        <Pricing />
        <Events mode="homepage" />
        <InfoBox title={whyustext.title} steps={whyustext.steps} icons={[MdFlashOn, MdThumbUp, MdEuroSymbol]} />
        <Questions />
        <BottomBookNow />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setHistory: (history) => dispatch(setHistory(history))
  };
}


export default connect(
  null,
  mapDispatchToProps
)(Homepage);