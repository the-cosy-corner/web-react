import React, { Component } from "react";
import { Card, Container, Nav } from "react-bootstrap";
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
              With its close proximity to a range of shops, restaurants, and cultural attractions, you'll never run out of things to do. 
            </Card.Text>
            <Nav.Link href="/everton-brow" className="btn btn-primary btn-lg">
              View Property
            </Nav.Link>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
