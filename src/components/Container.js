import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import Header from "./Header";
import ImageInfo from "./ImageInfo";
import Image from "./Image";
import axios from "axios";

function Container() {
  const [date, setDate] = useState("2019-11-07");
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=TUfWIbg9HuPfq4nEIo9bI7ZUdQyMstScLBGutsMF&date=${date}`
      )
      .then(response => {
        setImage(response.data);
      })
      .catch(error => {});
  }, [date]);

  return (
    <div className="container">
      {/* <p>Select Date:  <input
        type="date"
        min="2012-01-01"
        max="2019-11-06"
        onChange={e => setDate(e.target.value)}
      ></input></p> */}
      <Form className="dateSelector">
        <FormGroup>
          <Row>
            <Col sm={{ size: 3, offset: 3 }}>
              <Label>
                <h3> Select Date:</h3>
              </Label>
            </Col>
            <Col xs="3">
              <Input
                type="date"
                name="date"
                id="exampleDate"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </Col>
          </Row>
        </FormGroup>
      </Form>
      <Header title={image.title} />
      <Image url={image.url} title={image.title} />
      <ImageInfo date={image.date} explanation={image.explanation} />
    </div>
  );
}

export default Container;
