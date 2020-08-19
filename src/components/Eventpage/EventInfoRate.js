import React, { Component } from 'react';
import { FaStar } from "react-icons/fa"
import { Carousel } from 'react-responsive-carousel';

class EventInfoRate extends Component {

  render() {
    return (
      <div className="container-fluid bg-black" ref={this.props.ref}>
        <div className="row pt-md-2 pb-md-3">
          <div className="col-12 p-3 mb-2 pt-4 pb-4">
            <div className="row exclusion align-items-center">
              <div className="col-12 col-md-auto">
                <div className="heading-medium mb-1 mt-1 mint">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
              <div className="col-12 col-md">
                <div className="heading-xlarge">
                  Rated 4.98 Stars
              </div>
              </div>
            </div>
            <div className="heading-xsmall mt-2">
              on Facebook, Google & TripAdvisor <span className="mint">(1,000+ Reviews)</span>
            </div>
            <div className="mt-4 pt-1">
              <div className="d-flex justify-content-center" id="testimonials-carousel">
                <Carousel classNameName="main-carousel" showStatus={false} showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true}>
                  <div className="slide container-fluid">
                    <div className="row align-items-center">
                      <div className="col-5 col-md-3 pl-4">
                        <img className="rounded full-width" src="https://shoott.com/wp-content/uploads/2019/08/quote-7.jpg"
                        />
                      </div>
                      <div className="col-7 col-md-9 pl-0 pr-3 client-quote pl-md-4">
                        <p>Amazing experience and I LOVE THE PICS!!!!!</p>
                        <div className="heading-decoration">- Jennifer L</div>
                      </div>
                    </div>
                  </div>


                  <div className="slide container-fluid">
                    <div className="row align-items-center">
                      <div className="col-5 col-md-3 pl-4">
                        <img className="rounded full-width" src="https://shoott.com/wp-content/uploads/2019/08/quote-6.jpg"
                        />
                      </div>
                      <div className="col-7 col-md-9 pl-0 pr-3 client-quote pl-md-4">
                        <p>Amazing!!! Our photographer went out of her way to capture beautiful family photos and work
                      with our three toddlers</p>
                        <div className="heading-decoration">- Crim Family</div>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default EventInfoRate;
