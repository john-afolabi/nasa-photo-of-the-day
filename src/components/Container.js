import React, { useState, useEffect } from 'react';
import DateSelector from "./DateSelector";
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
            < DateSelector />
        </div>
    )
    
}

export default Container;
