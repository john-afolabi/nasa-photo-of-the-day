import React from 'react';

function ImageInfo(props) {
    return (
        <div className="imageInfo">
            <h3>Date:</h3>{props.date}
            <h3>Explanation:</h3>{props.explanation}
        </div>
    )
}

export default ImageInfo;