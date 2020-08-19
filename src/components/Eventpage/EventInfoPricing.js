import React, { Component } from 'react';
import { FaCheck } from 'react-icons/fa';

class EventInfoPricing extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-3 pt-4 pb-4 mt-2 mb-2">

            <div className="info-box">
              <div className="pb-2 border-bottom">
                <div className="heading-decoration black">Your Shoott Gallery</div>
              </div>
              <div className="p-2">
                <div className="row exclusion mt-2">
                  <div className="col-auto pr-0">
                    <FaCheck className="mint" />
                  </div>
                  <div className="col">
                    Digital gallery of 40+ high-res, lightly edited photos sent via email 3-5 business days after your
                    shoot
                </div>
                </div>
                <div className="row exclusion mt-2">
                  <div className="col-auto pr-0">
                    <FaCheck className="mint" />
                  </div>
                  <div className="col">
                    Only pay for photos you love!
                </div>
                </div>
                <div className="row exclusion text-center mt-4">
                  <div className="col">
                    <div className="heading-large mint2 d-md-inline-block mr-md-2">$15</div>
                  per photo
                </div>
                  <div className="col">
                    <div className="heading-large mint2 d-md-inline-block mr-md-2">$12</div>
                  each for 10+ pics
                </div>
                  <div className="col">
                    <div className="heading-large mint2 d-md-inline-block mr-md-2">$220</div>
                  for all 40+
                </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default EventInfoPricing;
