import React, { Component } from 'react';
import { connect } from "react-redux";
import Navbar from "../components/Common/Navbar"
import Events from "../components/Common/Events"
import Footer from '../components/Common/Footer';
import { setHistory } from '../store/configureStore';


class Bookpage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.setHistory(this.props.history);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar mode="bookpage" />
        <Events mode="bookpage" />
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
)(Bookpage);
