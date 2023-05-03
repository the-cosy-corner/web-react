import React, { Component } from "react";
import { Container, Accordion } from "react-bootstrap";
import QRCode from "react-qr-code";

export default class EvertonBrow extends Component {
  state = {};
  render() {
    return (
      <>
        <Container>
          <p>
            Welcome to Everton Brow! We are thrilled to have you as our guest and hope you have a wonderful stay with us. Our property is designed to offer you a comfortable and relaxing experience.
            Whether you are here for business or pleasure, we are committed to providing you with a warm and welcoming experience that will make you feel right at home. Thank you for choosing to stay
            with us, and we look forward to hosting you!
          </p>
          <h4>House Rules</h4>
          <Accordion>
            <Accordion.Item eventKey="party">
              <Accordion.Header>Party time!</Accordion.Header>
              <Accordion.Body>
                We love a good celebration just as much as you do, but please refrain from throwing parties or events during your stay. We want to make sure our neighbours and other guests can enjoy
                their time here too!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="shoes">
              <Accordion.Header>To shoe or not to shoe?</Accordion.Header>
              <Accordion.Body>We kindly request that you remove your shoes before walking on our lovely new carpets. This helps keep them clean and fresh for all our guests to enjoy!</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="air">
              <Accordion.Header>Let's clear the air</Accordion.Header>
              <Accordion.Body>
                For the safety and comfort of all our guests, we have a strict no smoking or vaping policy inside the house. Please use designated outdoor area and ashtray provided.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="peace">
              <Accordion.Header>Keep the peace</Accordion.Header>
              <Accordion.Body>We want everyone to have a relaxing and peaceful stay, so please keep noise levels down between the hours of 10 PM to 8 AM.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="guest-numbers">
              <Accordion.Header>One's company, two's a crowd</Accordion.Header>
              <Accordion.Body>To ensure the safety and comfort of all our guests, we kindly ask that you don't exceed the number of guests allowed in the house.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="pets">
              <Accordion.Header>Furry friends</Accordion.Header>
              <Accordion.Body>We love pets, but unfortunately, we can't accommodate them at the house.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="check-in">
              <Accordion.Header>Check-in and check-out: 4pm-11am</Accordion.Header>
              <Accordion.Body>
                We know you're excited to start your holiday, but please wait until the designated check-in time to arrive. Check-out time is just as important so we can properly prepare the property
                for our next guests. We appreciate your cooperation!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="comforts">
              <Accordion.Header>All the comforts of home</Accordion.Header>
              <Accordion.Body>
                Feel free to use all the amenities we provide, such as the fully equipped kitchen, TV, and internet. We just kindly ask that you treat them with respect and care.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="oops">
              <Accordion.Header>Oops, we did it again</Accordion.Header>
              <Accordion.Body>
                Accidents happen, and if any damage occurs during your stay, please let us know right away so we can take care of it. We appreciate your honesty and cooperation!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="bins">
              <Accordion.Header>Taking out the bins</Accordion.Header>
              <Accordion.Body>Don't worry about taking out the bins, we've got it covered! Just make sure to dispose of it properly in the designated bins.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="instructions">
              <Accordion.Header>House Instructions</Accordion.Header>
              <Accordion.Body>Equipment instructions are stored in cabinet next to the front door</Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <br />
          <h3>We hope you have a fantastic stay and thank you for following our house rules!</h3>
          <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%", display:"none" }}>
            <QRCode size={256} style={{ height: "auto", maxWidth: "100%", width: "100%" }} value={"https://staging--the-cosy-corner-dev.netlify.app/everton-brow"} viewBox={`0 0 256 256`} />
          </div>
        </Container>
      </>
    );
  }
}
