import React, { useState, useEffect } from "react";
import Header from "./Header";
import ImageInfo from "./ImageInfo";
import Image from "./Image";
import axios from "axios";

function Container() {
  const [date, setDate] = useState("2019-11-06");
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=TUfWIbg9HuPfq4nEIo9bI7ZUdQyMstScLBGutsMF&date=${date}`
      )
      .then(response => {
        console.log(response.data);
        setImage(response.data);
      })
      .catch(error => {});
  }, [date]);

  return (
    <div className="container">
       <p>Select Date:  <input
        type="date"
        min="2012-01-01"
        max="2019-11-06"
        onChange={e => setDate(e.target.value)}
      ></input></p>
      <Header title={image.title} />
      <Image url={image.url} explanation={image.explanation} />
      <ImageInfo date={image.date} explanation={image.explanation} />
    </div>
  );
}

export default Container;
