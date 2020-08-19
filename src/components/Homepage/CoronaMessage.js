import React, { Component } from 'react';

class CoronaMessage extends Component {

  render() {
    return (
      <div className="container-fluid bg-mint p-3 bold" id="message-header">
        <div className="row" >
          <div className="col text-center">
            <span className="white">Our top priority is the
                  safety of both customers and photographers. </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CoronaMessage;
