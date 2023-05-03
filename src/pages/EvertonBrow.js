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
          <h4>Places to Visit</h4>
          <Accordion>
            <Accordion.Item eventKey="beatles">
              <Accordion.Header>The Beatles Story</Accordion.Header>
              <Accordion.Body>
                This immersive museum tells the story of the iconic band and their rise to fame. You can explore exhibits, listen to music, and learn about the cultural impact of The Beatles. Check
                out their website for more information: <a href="https://www.beatlesstory.com/">beatlesstory.com</a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="albert-dock">
              <Accordion.Header>Royal Albert Dock</Accordion.Header>
              <Accordion.Body>
                This iconic waterfront landmark is a UNESCO World Heritage site and home to a range of shops, restaurants, and attractions. You can take a leisurely stroll along the dock and enjoy the
                stunning views. Check out their website for more information: <a href="https://www.albertdock.com/">albertdock.com</a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="liverpool-cathedral">
              <Accordion.Header>Liverpool Cathedral</Accordion.Header>
              <Accordion.Body>
                This stunning cathedral is the largest in the UK and is home to beautiful stained-glass windows, a tower with panoramic views, and an art gallery. Check out their website for more
                information: <a href="https://www.liverpoolcathedral.org.uk/">liverpoolcathedral.org.uk</a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="anfield">
              <Accordion.Header>Anfield Stadium</Accordion.Header>
              <Accordion.Body>
                This is the home of Liverpool FC and a must-visit destination for football fans. You can book a stadium tour to learn more about the club's history and see the pitch up close. Check
                out their website for more information: <a href="https://www.liverpoolfc.com/anfield/stadium-tours">liverpoolfc.com/anfield/stadium-tours</a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="goodison">
              <Accordion.Header>Goodison Park</Accordion.Header>
              <Accordion.Body>
                This is the home of Everton FC and also offers stadium tours. You can book a tour to see behind the scenes and learn about the club's history. Check out their website for more
                information: <a href="https://www.evertonfc.com/stadium-tours">evertonfc.com/stadium-tours</a>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <br />
          <h4>Places to Eat</h4>
          <Accordion>
            <Accordion.Item eventKey="italian">
              <Accordion.Header>The Italian Club Fish</Accordion.Header>
              <Accordion.Body>
                This family-owned restaurant offers delicious seafood and Italian-inspired dishes. Check out their website for more information:{" "}
                <a href="https://www.theitalianclubfish.co.uk/">theitalianclubfish.co.uk</a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="maray">
              <Accordion.Header>Maray</Accordion.Header>
              <Accordion.Body>
                This trendy restaurant serves delicious small plates and cocktails in a cosy atmosphere. Check out their website for more information:{" "}
                <a href="https://www.maray.co.uk/">maray.co.uk</a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="baltic">
              <Accordion.Header>The Baltic Market</Accordion.Header>
              <Accordion.Body>
                This bustling street food market has a wide variety of food and drink options, from pizza to craft beer. Check out their website for more information:{" "}
                <a href="https://www.balticmarket.co.uk/">balticmarket.co.uk</a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="mowgli">
              <Accordion.Header>Mowgli</Accordion.Header>
              <Accordion.Body>
                This colourful and vibrant restaurant serves delicious Indian street food, including curries, chaat, and biryanis. Check out their website for more information:{" "}
                <a href="https://mowglistreetfood.com/">mowglistreetfood.com</a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="philharmonic">
              <Accordion.Header>The Philharmonic Dining Rooms</Accordion.Header>
              <Accordion.Body>
                This historic pub has stunning Victorian decor and offers a range of pub grub and drinks. Check out their website for more information:{" "}
                <a href="https://www.nicholsonspubs.co.uk/restaurants/northwest/thephilharmonicdiningroomsliverpool">nicholsonspubs.co.uk/restaurants/northwest/thephilharmonicdiningroomsliverpool</a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="our-favourite">
              <Accordion.Header>Our favourite places to eat </Accordion.Header>
              <Accordion.Body>Bold Street restaurants (variety of cuisines) Baltic Market offering variety of street food</Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <br />
          <h4>Things to See</h4>

          <Accordion>
            <Accordion.Item eventKey="st-george-hall">
              <Accordion.Header>St. George's Hall</Accordion.Header>
              <Accordion.Body>
                This stunning neo-classical building hosts a range of events, from concerts to exhibitions. You can also take a tour to learn more about the history and architecture of the hall. Check
                out their website for more information: <a href="https://www.stgeorgeshallliverpool.co.uk/">stgeorgeshallliverpool.co.uk</a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="sefton-park">
              <Accordion.Header>Sefton Park</Accordion.Header>
              <Accordion.Body>
                This beautiful park has a range of gardens, lakes, and monuments, and is perfect for a leisurely stroll. Check out their website for more information:{" "}
                <a href="https://liverpool.gov.uk/parks-and-greenspaces/sefton-park/">liverpool.gov.uk/parks-and-greenspaces/sefton-park</a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="Liverpool-one">
              <Accordion.Header>Liverpool ONE</Accordion.Header>
              <Accordion.Body>
                This bustling shopping district has a range of high street and designer stores, as well as cafes and restaurants. Check out their website for more information:{" "}
                <a href="https://www.liverpool-one.com/">liverpool-one.com</a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="Liverpool-empire">
              <Accordion.Header>Liverpool Empire Theatre</Accordion.Header>
              <Accordion.Body>
                This stunning theatre hosts a range of shows, from musicals to comedy. Check out their website:{" "}
                <a href="https://www.liverpooltheatres.com/venue/liverpool-empire-theatre_liverpool">liverpooltheatres.com/venue/liverpool-empire-theatre_liverpool</a>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%", display: "none" }}>
            <QRCode size={256} style={{ height: "auto", maxWidth: "100%", width: "100%" }} value={"https://staging--the-cosy-corner-dev.netlify.app/everton-brow"} viewBox={`0 0 256 256`} />
          </div>
        </Container>
      </>
    );
  }
}
