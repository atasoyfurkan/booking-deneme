import React, { Component } from 'react';



class EventInfoPolicy extends Component {

  render() {
    return (
      <div className="container-fluid bg-grey" id="booking-faq">
        <div className="row">
          <div className="col-12 p-3 pb-4">
            <div className="info-title mt-3">
              <div className="heading-xlarge mb-3">Keep these in mind</div>
            </div>
            <div className="info-title mt-4">
              <div className="faq-unit">
                <div className="faq-question-event heading-small mb-3">Weather Policy <span
                  className="fa fa-angle-down ml-2 mint2"></span><span className="fa fa-angle-up ml-2 mint2"></span></div>
                <div className="faq-answer-event">
                  <p>Shoott works rain or shine, so if you are not willing to be photographed in rain or other
                  elements, please monitor the weather and proactively cancel your session by deadline to avoid the
                  late cancel charge. Failure to cancel will be taken as a willingness to be photographed in these
                  elements – but <a href="https://shoott.com/gallery/?ref=rain-shots" target="_blank"
                      className="link-mint2 bold">a light rain will yield amazing shots</a>, we promise!</p>
                </div>
              </div>
              <div className="faq-unit">
                <div className="faq-question-event heading-small mb-3">Cancellation & Lateness Policy <span
                  className="fa fa-angle-down ml-2 mint2"></span><span className="fa fa-angle-up ml-2 mint2"></span></div>
                <div className="faq-answer-event">
                  <p>You can easily cancel or reschedule at any time up to <b>10:00am two days before your
                    session</b>.</p>
                  <p>If you do not show up for your session or you cancel after this time, you agree to pay a $40 fee
                  to cover your photographer’s time and forfeiture of other paid gigs.</p>
                  <p>If you are more than 15 minutes late to your session start time, you agree to pay a late fee of
                  $20-40 depending on time of arrival.</p>
                </div>
              </div>
              <div className="faq-unit">
                <div className="faq-question-event heading-small mb-3">Photo Editing Policy <span
                  className="fa fa-angle-down ml-2 mint2"></span><span className="fa fa-angle-up ml-2 mint2"></span></div>
                <div className="faq-answer-event">
                  <p>Your digital gallery will be lightly edited by your photographer - i.e. color, cropping, and
                  lighting adjustments - as a complimentary service. It does not include Photoshop image
                  manipulation of objects, faces, bodies or clothing. Editing styles vary by photographer. To
                  request adjustments to the editing only, you must first purchase photos. <a
                      className="bold link-mint2" href="https://shoott.com/photo-editing-policy/" target="_blank">Click
                    here for more information.</a></p>
                </div>
              </div>
              <div className="faq-unit">
                <div className="faq-question-event heading-small mb-3">Regarding COVID-19 <span
                  className="fa fa-angle-down ml-2 mint2"></span><span className="fa fa-angle-up ml-2 mint2"></span></div>
                <div className="faq-answer-event">
                  <p>Shoott sessions are outdoor and photographers strictly maintain a distance from clients, so risk
                  of exposure is <b>minimal to none</b>. We will only be sending healthy photographers wearing
                  masks! If you need to cancel your session, please do so by the 2 day cutoff out of respect to our
                  hard-working photographers and to avoid late cancel charges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventInfoPolicy;
