import React from 'react';

function Nav({direction = 'row', display = 'flex', className = ''}) {

    const navStyle = {
        display: display,
        flexDirection: direction,
        gap: '20px'

    }

    return  (
        <nav className={className}>
            <ul style={navStyle}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;