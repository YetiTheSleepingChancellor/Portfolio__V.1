import React from 'react';
import Button from '../button/Button'

function Nav({direction = 'row', display = '', className = ''}) {

    const navListStyle = {
        display: display,
        alignItems: 'center',
        flexDirection: direction,
        gap: '20px'
    }

    return  (
        <nav className={className}>
            <ul style={navListStyle}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <Button>Download CV</Button>
        </nav>
    )
}

export default Nav;