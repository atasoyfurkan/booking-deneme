import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { connect } from "react-redux";

class EventCarousel extends Component {
  state = {
    spacerRef: React.createRef(),
    mainImagesStyle: {
      width: 0,
      left: 0
    },
    float: false,
    stay: false
  };

  componentDidMount() {
    this.windowResize();
    window.addEventListener("resize", this.windowResize);
    window.addEventListener("scroll", this.windowScroll);
  }

  windowResize = () => {
    const width = this.state.spacerRef.current ? this.state.spacerRef.current.getBoundingClientRect().width : 0;
    const left = this.state.spacerRef.current ? this.state.spacerRef.current.getBoundingClientRect().left : 0;

    this.setState({ mainImagesStyle: { width, left } })
  }

  windowScroll = () => {
    if (window.scrollY > 50) {
      this.setState({ float: true })
    } else {
      this.setState({ float: false })
    }
    if (this.props.containerBottom <= 0) {
      this.setState({ stay: true, float: false })
    } else {
      this.setState({ stay: false })
    }
  }

  render() {
    const { event } = this.props;

    return (
      <React.Fragment>
        <div id="main-images-spacer" ref={this.state.spacerRef}></div>

        <div className={`container-fluid ${this.state.float && "float"} ${this.state.stay && "stay"}`} id="main-images" style={this.state.mainImagesStyle}>
          <div className="row exclusion p-0" style={{ paddingLeft: this.props.glutter, paddingRight: this.props.glutter }}>
            <div className="col text-center p-0">
              <div id="carousel-main-images" className="box-shadow" >
                <div className="slide bg-white">
                  <Carousel showArrows={this.state.float ? true : false} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true}>
                    {event.get("photoUrls").map(((url, i) =>
                      < img key={i} className="full-width" src={url} />
                    ))}
                  </Carousel>
                </div>
              </div>

              <div className={`container-fluid d-none d-md-block text-left bg-black ${(this.state.float || this.state.stay) && "float"}`} id="fullscreen-info">
                <div className="row exclusion align-items-center pl-2 pr-2" style={{ paddingLeft: this.props.glutter, paddingRight: this.props.glutter }}>
                  <div className="col pt-3 pb-3">
                    <div className="heading-medium mb-2">
                      {event.get("name")}
                    </div>
                    <div style={{ fontSize: "0.85em" }}>
                      <div>
                        <span className="fa fa-calendar mint mb-1"></span>
                        {event.get("availableDates").length} Dates
                    <span className="d-none d-md-inline">, from <b>{new Date(event.get("availableDates").sort()[0]).toDateString().substr(0, 11)}</b></span>
                      </div>
                      <div>
                        <span className="fa fa-ticket mint"></span> No Booking Fee
                    </div>
                    </div>
                  </div>
                  <div className="col-auto mb-md-3 mb-lg-0">
                    <div onClick={this.props.openModal} className="button button-large button-mint pl-3 pr-3 rounded open-booksession">Book Now</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

const mapStateToProps = state => {
  return {
    glutter: state.main.glutter,
    event: state.main.event
  }
}

export default connect(
  mapStateToProps
)(EventCarousel);