import React, { Component } from 'react';
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Joi, FormHandler } from 'react-form-error';
import { notify } from 'react-notify-bootstrap'
import Parse from "parse"

class BookModal extends Component {
  state = {
    secondPart: false,
    name: "",
    surname: "",
    email: "",
    instagram: "",
    channel: "WhatsApp",
    countryCode: "",
    phone: "",
    sessionStyle: "",
    extraInfo: "",
    errors: null,
    isFocused: {},
    choosenDateIndex: 0,
    choosenTime: "",
    hours: {},
  };

  schema = {
    name: Joi.string().required().min(2),
    surname: Joi.string().required().min(2),
    email: Joi.string().email().required(),
    countryCode: Joi.string().required(),
    phone: Joi.string().regex(/\(5\d\d\) \d\d\d \d\d\d\d/).required()
  };

  async componentDidMount() {
    await this.getHoursFromDate(this.props.event.get("availableDates")[this.state.choosenDateIndex]);
  }

  getHoursFromDate = async (date) => {
    const BookingEventAvailableHours = Parse.Object.extend("BookingEventAvailableHours");
    const query = new Parse.Query(BookingEventAvailableHours);
    query.equalTo("eventId", this.props.id);
    query.equalTo("date", date);

    let result = await query.find();
    result = result[0] && result[0].get("hours")
    const hours = { ...this.state.hours, [date]: result }

    this.setState({ hours })
  }

  formInfo = () => (
    [
      { label: "First Name*", name: "name" },
      { label: "Last Name*", name: "surname" },
      { label: "Email*", name: "email" },
      { label: "Instagram (optional)", name: "instagram" }
    ]
  );


  chooseTime = (time) => {
    if (!this.isHourAvailable(time)) return;

    this.setState({ choosenTime: time })
    this.setState({ secondPart: true });
  }

  bookMe = async () => {
    const BookingForm = Parse.Object.extend("BookingForm");
    const form = new BookingForm();

    form.set("name", this.state.name);
    form.set("surname", this.state.surname);
    form.set("email", this.state.email);
    form.set("instagram", this.state.instagram);
    form.set("channel", this.state.channel);
    form.set("phone", this.state.countryCode + this.state.phone);
    form.set("eventName", this.props.event.get("name"));
    form.set("eventId", this.props.event.id);
    form.set("date", this.props.event.get("availableDates")[this.state.choosenDateIndex]);
    form.set("time", this.state.choosenTime);

    try {
      await form.save();
      notify({ text: "Your session successfully booked", variant: "success" });
      this.setState({ secondPart: false });
    } catch (e) {
      notify({ text: "Server is not responding", variant: "danger" });
    }

    this.props.onHide();
  }

  handleChange = async (event) => {
    if (event.target.name === "phone") this.formatPhone(event)

    await this.setState({ [event.target.name]: event.target.value });
    this.setState({ errors: FormHandler.takeErrors() });
  }

  handleFocus = (event) => {
    this.setState({ isFocused: { [event.target.name]: true } })
  }

  formatPhone = (event) => {
    const input = event.target.value.replace(/\D/g, '').substring(0, 10); // First ten digits of input only
    const zip = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);
    let val = ""
    if (input.length > 6) { val = `(${zip}) ${middle} ${last}`; }
    else if (input.length > 3) { val = `(${zip}) ${middle}`; }
    else if (input.length > 0) { val = `(${zip}`; }

    event.target.value = val
  };

  changeDate = async (mode) => {
    const newIndex = mode === "next" ? this.state.choosenDateIndex + 1 : this.state.choosenDateIndex - 1;

    if (!Object.keys(this.state.hours).includes(newIndex))
      await this.getHoursFromDate(this.props.event.get("availableDates")[newIndex]);

    this.setState({ choosenDateIndex: newIndex })
  }

  isHourAvailable = (time) => {
    const choosenHours = this.state.hours[this.props.event.get("availableDates")[this.state.choosenDateIndex]];
    return choosenHours && choosenHours.includes(time);
  }

  render() {
    const { event } = this.props;

    if (!this.state.secondPart) {
      return (
        <Modal show={this.props.show} onHide={this.props.onHide} dialogClassName="more-radius first" size="lg" >
          <Modal.Header closeButton>
            <Modal.Title className="bold"> Select Date & Time</Modal.Title>
          </Modal.Header>
          <Modal.Body className="row justify-content-center">
            <div className="col-11 col-md-10 row justify-content-between mb-4" >
              <div onClick={() => this.changeDate("prev")} className={`col-2 d-flex justify-content-center align-items-center clickable-opacity ${this.state.choosenDateIndex === 0 && "invisible"}`}>
                <FaArrowLeft style={{ fontSize: "20px" }} className="mint" />
              </div>

              <div className="col-6 text-center clickable-opacity">
                <div style={{ fontSize: "18px" }} className="bold mb-1">
                  {new Date(event.get("availableDates")[this.state.choosenDateIndex]).toDateString().substr(0, 11)}
                </div>
                <div style={{ fontSize: "13px" }} className="heading-decoration mint">VIEW CALENDAR</div>
              </div>

              <div onClick={() => this.changeDate("next")} className={`col-2 d-flex justify-content-center align-items-center clickable-opacity ${event && this.state.choosenDateIndex === event.get("availableDates").length - 1 && "invisible"}`}>
                <FaArrowRight style={{ fontSize: "20px" }} className="mint" />
              </div>
            </div>
            <div className="col-11 col-md-10 row justify-content-between" >

              <div className="table-responsive" id="timeslots">
                <table className="table">
                  {["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"].map((time) =>
                    <div key={time} className={`timeslot ${this.isHourAvailable(time) && "available"}`} onClick={() => this.chooseTime(time)}>
                      <div className="row justify-content-center align-items-center">
                        <div className="col-auto" style={{ width: "10em" }}>
                          <h3 className="timeslot-time">{time}</h3>
                        </div>
                        <div className="col-auto text-left" style={{ fontSize: "0.9em" }}>
                          <p className="mb-1">30 minute session</p>
                          <p className="mb-0">No booking fee</p>
                        </div>
                      </div>
                    </div>
                  )}
                </table>
              </div>
            </div>
          </Modal.Body>
        </Modal >
      );
    } else {
      return (
        <Modal show={this.props.show} onHide={this.props.onHide} dialogClassName="more-radius" size="lg" >
          <Modal.Header closeButton>
            <Modal.Title className="bold">Book your session</Modal.Title>
          </Modal.Header>
          <Modal.Body className="row justify-content-center">
            <div className="col-11 col-md-10 justify-content-center mb-4 border-bottom" >
              <div className="row align-items-center mb-2">
                <div className="col-auto black heading-decoration">EVENT</div>
                <div className="col">{event.get("name")}</div>
              </div>
              <div className="row align-items-center mb-2">
                <div className="col-auto black heading-decoration">DATE<span className="invisible">X</span></div>
                <div onClick={() => this.setState({ secondPart: false })} className="col align-items-center d-flex clickable-opacity">
                  {new Date(event.get("availableDates")[this.state.choosenDateIndex]).toDateString().substr(0, 11)}
                  <MdEdit style={{ fontSize: "19px" }} className="ml-2 mint" />
                </div>
              </div>
              <div className="row align-items-center mb-2">
                <div className="col-auto black heading-decoration">TIME<span className="invisible">X</span></div>
                <div onClick={() => this.setState({ secondPart: false })} className="col align-items-center d-flex clickable-opacity">
                  {this.state.choosenTime}
                  <MdEdit style={{ fontSize: "19px" }} className="ml-2 mint" />
                </div>
              </div>
            </div>
            <div className="col-11 col-md-10 justify-content-center mb-4 border-bottom" >
              <div className="row text-left">

                {this.formInfo().map(({ label, name }) => (
                  <div key={name} className="col-12 col-sm-6">
                    <div className={`form-field 
                                    ${this.state.errors && !this.state.errors[name] && "valid"} 
                                    ${this.state.isFocused[name] && "highlight"}`}>
                      <label>{label}</label>
                      <input value={this.state[name]} onFocus={this.handleFocus} onChange={this.handleChange} style={{ fontSize: "16px" }} className="check" name={name} />
                      {name !== "instagram" && <FaCheck className="ml-2 fa-check" />}
                    </div>
                  </div>
                ))}

                <div className="col-12">
                  <div className={`form-field`}>
                    <label>Your Favorite Channel</label>
                    <select style={{ fontSize: "16px" }} value={this.state.channel} onChange={(e) => this.setState({ channel: e.target.value })} >
                      <option>WhatsApp</option>
                      <option>Telegram</option>
                    </select>
                  </div>
                </div>

                <div className="col-12 mb-4">
                  <div className={`form-field 
                                  ${this.state.errors && !this.state.errors["phone"] && !this.state.errors["countryCode"] && "valid"} 
                                  ${((this.state.isFocused["phone"] && !this.state.isFocused["countryCode"]) || (!this.state.isFocused["phone"] && this.state.isFocused["countryCode"])) && "highlight"}`}>
                    <label className="d-block">Mobile*</label>
                    <input value={this.state.countryCode} onFocus={this.handleFocus} onChange={this.handleChange} style={{ width: "20%", marginRight: "1.2em", fontSize: "16px" }} className="check" name="countryCode" placeholder="Country code" />
                    <input value={this.state.phone} onFocus={this.handleFocus} onChange={this.handleChange} style={{ width: "calc(80% - 3.2em)", fontSize: "16px" }} className="check" name="phone" placeholder="Phone number" />
                    <FaCheck className="ml-2 fa-check" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-11 col-md-10 justify-content-center mb-4" >
              <div className="col-12 text-center">
                <div id="submit" onClick={() => this.state.errors && !Object.values(this.state.errors).includes(true) && this.bookMe()} className={`button  button-xlarge border-round ${this.state.errors && !Object.values(this.state.errors).includes(true) ? "button-mint clickme" : "button-inactive"}`} style={{ width: "100%" }}>
                  Book Me In!
                </div>
                <div style={{ fontSize: "0.9em" }} className="text-center mt-3 link-mint2">
                  By using our services, you are agreeing to Shoott's <a href="#" id="termsconditions">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </Modal.Body >

          <FormHandler schema={this.schema} data={{
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            countryCode: this.state.countryCode,
            phone: this.state.phone
          }} />
        </Modal >
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    event: state.main.event
  }
}

export default connect(
  mapStateToProps
)(BookModal);