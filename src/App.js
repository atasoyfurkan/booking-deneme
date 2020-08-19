import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Redirect,
  Switch,
  HashRouter
} from "react-router-dom";
import { connect } from "react-redux";
import Notification from 'react-notify-bootstrap'
import Homepage from "./screens/Homepage";
import Bookpage from "./screens/Bookpage";
import Eventpage from "./screens/Eventpage";
import { handleGlutter, getAllEventsFromGivenPlace } from './store/configureStore';

class App extends Component {

  componentDidMount() {
    this.props.handleGlutter();
    this.props.getAllEventsFromGivenPlace("Houston");
  }

  render() {
    return (
      <React.Fragment>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/book" component={Bookpage} />
            <Route path="/event/:id" component={Eventpage} />

            <Redirect to="/not-found" />
          </Switch>
        </HashRouter>
        <Notification />
      </React.Fragment>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    handleGlutter: () => dispatch(handleGlutter()),
    getAllEventsFromGivenPlace: (place) => dispatch(getAllEventsFromGivenPlace(place))
  };
}


export default connect(
  null,
  mapDispatchToProps
)(App);
