import React, { Component } from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { connect } from "react-redux";
import { Joi, FormHandler } from 'react-form-error';
import { notify } from "react-notify-bootstrap"
import Parse from "parse"

class Footer extends Component {
  state = {
    name: "",
    surname: "",
    email: ""
  };

  schema = {
    name: Joi.string().required().min(2),
    surname: Joi.string().required().min(2),
    email: Joi.string().email().required()
  };

  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value });
    this.setState({ errors: FormHandler.takeErrors() });
  }

  signUp = async () => {
    const BookingMailingList = Parse.Object.extend("BookingMailingList");
    const form = new BookingMailingList();

    form.set("name", this.state.name);
    form.set("surname", this.state.surname);
    form.set("email", this.state.email);

    try {
      await form.save();
      notify({ text: "Successfully joined our mailing list", variant: "success" });
    } catch (e) {
      notify({ text: "Server is not responding", variant: "danger" });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="contact" className="container-fluid pt-md-4 pb-md-4" style={{ backgroundColor: "#000000" }}>
          <div className="row" style={{ paddingLeft: this.props.glutter, paddingRight: this.props.glutter }}>
            <div className="p-4 p-md-0 col-12 col-lg-10 offset-lg-1 pr-md-4 pl-md-5 pr-lg-0 pl-lg-0 mt-2 mt-md-0">
              <div className="row">

                <div className="text-center text-md-left col-12 col-sm-6 col-md white order-2 order-sm-0 p-md-3">
                  <img src={window.location.origin + "/img/logo-white.png"} style={{ width: "9em" }} />
                  <p className="mb-1 mt-3">Innogate Office, Galvanize, <br />44 Tehama St.</p>
                  <p className="mb-1">San Francisco, California</p>
                  <a className="mint" href="mailto:memories@reminisapp.com">memories@reminisapp.com</a>
                  <div className="mt-4" style={{ fontSize: "1.7em" }}>
                    <a href="https://www.instagram.com/reminisapp" target="_blank"><FaInstagram className="white mr-3" /></a>
                    <a href="https://www.facebook.com/reminisapp/" target="_blank"><FaFacebook className="white" /></a>
                  </div>
                  <div className="mt-4 link-white" style={{ fontSize: "0.8em" }}>
                    <a>Terms of Service</a>
                  </div>
                </div>
                <div
                  className="text-center text-md-left col-12 col-sm-6 col-md order-0 order-sm-1 heading-small link-white pr-md-5 mb-2 mb-md-0">
                  <a className="book-now-button d-block mb-3 mb-md-2 mt-2 mt-md-4 clickable"
                    onClick={() => this.props.history.push("/book")}>Book a Session</a>
                  <a className="d-block mb-3 mb-md-2" href="#howitworks">How It Works</a>
                  <a className="d-block mb-3 mb-md-2" href="#pricing">Pricing</a>
                  <a className="d-block mb-3 mb-md-2" href="#faq">FAQ</a>
                </div>
                <div className="col-12 col-md-5 order-1 order-sm-2 pr-md-5 p-2 mt-3 mb-3 mt-md-0 mb-sm-0">
                  <div className="bg-black p-3 p-md-4 border-round text-center">
                    <div className="p-2" id="mailinglist">
                      <div className="heading-medium pb-3">Join Our Mailing List!</div>
                      <div className="row text-left">
                        <div className="col-6">
                          <div style={{ fontSize: "0.8em" }} className="mb-1">First Name</div>
                          <input value={this.state.name} onChange={this.handleChange} name="name" style={{ width: "100%" }} id="mailinglist-firstname" />
                        </div>
                        <div className="col-6">
                          <div style={{ fontSize: "0.8em" }} className="mb-1">Last Name</div>
                          <input value={this.state.surname} onChange={this.handleChange} name="surname" style={{ width: "100%" }} id="mailinglist-lastname" />
                        </div>
                        <div className="col-12">
                          <div style={{ fontSize: "0.8em" }} className="mb-1 mt-2">Email Address</div>
                          <input value={this.state.email} onChange={this.handleChange} name="email" style={{ width: "100%" }} id="mailinglist-email" />
                        </div>
                      </div>
                      <div onClick={() => this.state.errors && !Object.values(this.state.errors).includes(true) && this.signUp()} className={`button button-mint button-large d-block mt-3 text-center ${this.state.errors && !Object.values(this.state.errors).includes(true) ? "button-mint clickme" : "button-inactive"}`}
                        id="mailinglist-button">Sign Up</div>
                      <span id="mailinglist-error" style={{ fontSize: "0.9em" }}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FormHandler schema={this.schema} data={{ name: this.state.name, surname: this.state.surname, email: this.state.email }} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    glutter: state.main.glutter,
    history: state.main.history
  }
}

export default connect(
  mapStateToProps
)(Footer);