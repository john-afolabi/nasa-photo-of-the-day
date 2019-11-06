import React from 'react';

function Header(props) {
    return (
        <div className="header">
            <h1>NASA Photo of the Day</h1>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Header;