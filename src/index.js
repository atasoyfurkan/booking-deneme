import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Parse from "parse"
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-datepicker/dist/react-datepicker.css";
import './index.css';
import configureStore from "./store/configureStore";


Parse.initialize("M7U3MemtabhLjEe4yYOCz15uEIoFWeD98uCklwSs");
Parse.serverURL = 'https://parse.reminis.app/parse';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
