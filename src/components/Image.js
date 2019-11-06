import React from 'react';

function Image(props) {
    return (
        <img className="nasaImage" src={props.url} alt={props.title}></img>
    )
}

export default Image;