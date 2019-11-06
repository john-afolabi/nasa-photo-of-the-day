import React from 'react';

function ImageInfo(props) {
    return (
        <div className="imageInfo">
            <p><strong>Date:</strong> {props.date}</p>
            <p><strong>Explanation:</strong> {props.explanation}</p>
        </div>
    )
}

export default ImageInfo;