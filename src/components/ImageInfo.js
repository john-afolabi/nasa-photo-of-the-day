import React from "react";
import { Container, Row, Col } from "reactstrap";

function ImageInfo(props) {
  return (
    <Container className="imageInfo">
      <Row>
        <Col xs="3"><h3>Date:</h3></Col>
        <Col xs="9">{props.date}</Col>
      </Row>

      <Row>
        <Col xs="3"><h3>Explanation:</h3></Col>
        <Col xs="9">{props.explanation}</Col>
      </Row>
    </Container>
  );
}

export default ImageInfo;
