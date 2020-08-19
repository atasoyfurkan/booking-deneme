import React, { Component } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { connect } from "react-redux";

class Questions extends Component {
  state = {
    faqUnit: [
      {
        question: "Is my session really free?",
        answer: <React.Fragment><p><span className="bold">Yes!</span> Our sessions are completely free to book, with no obligation
        to buy photos and no minimum order size.</p>
          <p>After your photo shoot, you'll receive a digital gallery of 40+ high-res, lightly edited
          photos in 3-5 business days and you only pay for the shots you want at a competitive price
        of $15 per photo or less.</p></React.Fragment>
      },
      {
        question: "What kinds of photography do you provide?",
        answer: <React.Fragment>
          <p>Our bookable sessions are for portraits of all different styles for people... or dogs! Or
                          even adventurous cats!</p>
          <p>We’re great for social media, family portraits, personal branding, headshots, fitness,
                          proposals, anniversaries, reunions and more.</p>
          <p>We also accommodate custom requests for event photography and certain types of product
                          photography (ideally ones that use models). We do not currently provide video.</p>
        </React.Fragment>
      },
      {
        question: "Who will my photographer be?",
        answer: <React.Fragment>
          <p>Once you've booked a session, our team will carefully match you with a photographer based on
                          your timeslot, preferred session style and any special requests.</p>
          <p>Our pros are a hand-picked team of visual artists at the top of their game - we only select
          the top 5% of applicants, vetted for strong technical skills as well as friendly
                          personalities - so no matter who you get, you know you're in good hands.</p>
          <p>All the photos you see on our website are from real Shoott galleries.</p>
        </React.Fragment>
      },
      {
        question: "What will my session be like?",
        answer: <React.Fragment>
          <p>Your 30 minute session is a <span className="bold">choose-your-own-adventure</span>, so
                          incorporate as many outfit changes, people, or props as you want! Our team is here to help
                          execute your vision, so be sure to share what you’re looking for or what you’d like to
                          convey so your photographer has a solid idea of how to help deliver what you want.</p>
          <p>Just trying us out for fun? That's totally fine too! Our photographers can take the reins and
                          work with your style and energy to bring out your best photographic self.</p>
        </React.Fragment>
      },
      {
        question: "What if I have no experience?",
        answer: <React.Fragment>
          <p><span className="bold">No problem at all!</span> In fact, for many of our clients, Shoott is
                          their first time working with a professional photographer.</p>
          <p>Our team is trained to work with people of all experience levels in front of the camera, as
          well as different body types, skin tones, personalities and moods. They'll make you feel
                          comfortable as they guide and direct you to the perfect shot.</p>
          <p>We know how to capture your best angles no matter if you’re looking for more formal business
          shots, family shots, or fun lifestyle shots. You name it, we can do it and also make sure
          you have a ton of fun during your Shoott experience! Because we know that when you feel
                          amazing, you look amazing.</p>
        </React.Fragment>
      },
      {
        question: "Can I book multiple sessions at once?",
        answer: <React.Fragment>
          <p><b>Back-to-back sessions:</b></p>
          <p>Your 30-minute session is sufficient for either a group shoot or a single person doing
          multiple outfit changes, locations, and poses, we promise! Two consecutive sessions may be
                          good for cases like a larger group that would also like to take individual shots.</p>
          <p>If you (and your group) wish to book more than one session in the same event, you'll be asked
                          to make a $75 prepayment which can then be applied towards 5 photos.</p>
          <p><b>Booking multiple events:</b></p>
          <p>With all our fun locations, we're happy for you to book a few events at once! However, if you
          make multiple bookings, you’ll be asked to make a $75 prepayment each for any additional
          sessions beyond your first booking, which can then be applied towards 5 photos per session.
                      </p>
        </React.Fragment>
      },
      {
        question: "Do I own my photos?",
        answer: <React.Fragment>
          <p><span className="bold">Yes!</span> You have full ownership of any photos you purchase, including
                          for commercial use.</p>
          <p>We love sharing photos from our sessions on our social media feeds, but if you want to keep
          your photos completely private, you can choose that as well when you receive your gallery.
                      </p>
        </React.Fragment>
      },
    ],
    areOpens: []
  };

  componentDidMount() {
    this.setState({ areOpens: new Array(this.state.faqUnit.length) })
  }

  toggleFaq = (index) => {
    let areOpens = new Array(this.state.areOpens.length);
    areOpens[index] = !this.state.areOpens[index];
    this.setState({ areOpens });
  }

  render() {
    return (
      <div className="bg-black container-fluid pt-md-4 pb-md-4" id="faq">
        <div className="row pt-2 pt-md-4 pb-2 pb-md-4 justify-content-center" style={{ paddingLeft: this.props.glutter, paddingRight: this.props.glutter }}>
          <div className="col-4 d-none d-lg-block pr-5 pt-4 pb-4"><img
            src={window.location.origin + "/img/ts_2.jpg"} className="full-width" /></div>
          <div className="col-12 col-md-10 col-lg-7 pt-4 pb-4">
            <div className="heading-xlarge mb-3 pb-3 mb-md-4" style={{ borderBottom: "1px solid #444" }}>Your questions,
                  answered</div>


            {this.state.faqUnit.map((item, index) =>
              <div className={`faq-unit ${this.state.areOpens[index] ? "open" : ""}`} key={index} onClick={() => this.toggleFaq(index)}>
                <div className="faq-question heading-small mb-3">{item.question}
                  {this.state.areOpens[index] ? <MdKeyboardArrowUp className="mint" /> : <MdKeyboardArrowDown className="mint" />}
                </div>
                <div className="faq-answer">
                  {item.answer}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    glutter: state.main.glutter
  }
}

export default connect(
  mapStateToProps
)(Questions);