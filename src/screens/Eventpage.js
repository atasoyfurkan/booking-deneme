import React, { Component } from 'react';
import { connect } from "react-redux";
import Navbar from "../components/Common/Navbar"
import EventInfo from "../components/Eventpage/EventInfo"
import Events from "../components/Common/Events"
import Questions from "../components/Common/Questions"
import Clients from "../components/Common/Clients"
import Footer from '../components/Common/Footer';
import '../components/Eventpage/event.css';
import BookModal from '../components/Eventpage/BookModal';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import { setHistory, getEventDetailedById } from '../store/configureStore';

class Eventpage extends Component {
  state = {
    loading: true,
    modalShow: false,
  };


  async componentDidMount() {
    window.scrollTo(0, 0)
    this.props.setHistory(this.props.history);

    await this.props.getEventDetailedById(this.props.match.params.id);
    this.setState({ loading: false });
  }

  openModal = () => {
    this.setState({ modalShow: true });
  }

  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <Navbar mode="eventpage" />

        {this.state.loading && < LoadingSpinner />}

        {!this.state.loading &&
          <React.Fragment>
            <EventInfo openModal={this.openModal} match={match} />
            <Events mode="homepage" bg="bg-white" />
            <BookModal
              onHide={() => this.setState({ modalShow: false })}
              show={this.state.modalShow}
              id={this.props.match.params.id}
            />
          </React.Fragment>
        }
        <Questions />
        <Clients />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setHistory: (history) => dispatch(setHistory(history)),
    getEventDetailedById: (id) => dispatch(getEventDetailedById(id))
  };
}


export default connect(
  null,
  mapDispatchToProps
)(Eventpage);