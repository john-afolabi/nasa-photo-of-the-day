import React, { useState, useEffect } from "react";
import { Spinner } from 'reactstrap';

function Image(props) {
    const [loaded, setLoaded] = useState(false);

    // useEffect(() => {
    //     if (loaded === false) return <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" />
    // }, [loaded])

    return (
        <div>
            <img className="nasaImage" src={props.url} alt={props.title} onLoad={() => setLoaded(true)}></img>
        </div>
    )
}

export default Image;