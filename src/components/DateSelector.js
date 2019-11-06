import React, { useState, useEffect } from "react";
import ImageInfo from "./ImageInfo";
import Image from "./Image";
import axios from "axios";

function DateSelector() {
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
      <Image url={image.url} explanation={image.explanation} />
      <ImageInfo date={image.date} explanation={image.explanation} />
      <input
        type="date"
        min="2012-01-01"
        max="2019-11-06"
        onChange={e => setDate(e.target.value)}
      ></input>
    </div>
  );
}

export default DateSelector;
