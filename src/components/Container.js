import React, { useState, useEffect } from 'react';
import ImageInfo from "./ImageInfo";
import Image from "./Image";
import axios from 'axios';

function Container() {
    const [image, setImage] = useState('');

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=TUfWIbg9HuPfq4nEIo9bI7ZUdQyMstScLBGutsMF')
        .then(response => {
            console.log(response.data);
            setImage(response.data)
        })
        .catch(error => {
        })
    }, [])

    return (
        <div className="container">
            < Image 
                url={image.url}
                explanation={image.explanation}
            />
            < ImageInfo 
                date={image.date}
                explanation={image.explanation}
            />
        </div>
    )
    
}

export default Container;
