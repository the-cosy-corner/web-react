import React, { Component } from "react";
import { Card, Container, Button } from "react-bootstrap";
import evertonbrow_title from "../images/properties/everton-brow/title.jpg";

export default class Home extends Component {
  state = {};
  render() {
    return (
      <Container align="center" style={{ "padding-top": "2rem" }}>
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={evertonbrow_title} />
          <Card.Body>
            <Card.Title>L3 8QG</Card.Title>
            <Card.Text align="left">
              Welcome to this charming townhouse rental located just minutes from the bustling city centre. This property offers the perfect blend of urban convenience and peaceful suburban living.
              With its close proximity to a range of shops, restaurants, and cultural attractions, you'll never run out of things to do. The townhouse itself boasts spacious rooms, modern amenities,
              and a cozy atmosphere that makes it the ideal home away from home. Whether you're traveling for business or leisure, this rental is the perfect choice for your stay.
            </Card.Text>
            <Button variant="primary">View Property</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}