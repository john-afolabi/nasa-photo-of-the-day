import React from 'react';

function Image(props) {
    return (
        <img className="nasaImage" src={props.url} alt={props.explanation}></img>
    )
}

export default Image;