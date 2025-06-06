import React from 'react';

function Nav({direction}) {

    const ulStyle = {
        gap: '20px',
        listStyle: 'none',
        display: 'flex',
    };

    const aStyle = {
        fontWeight: '400',
    };

    return  (
        <nav className={`nav${direction}`}>
            <ul style={ulStyle}>
                <li><a href="#" style={aStyle}>Home</a></li>
                <li><a href="#" style={aStyle}>About</a></li>
                <li><a href="#" style={aStyle}>Skills</a></li>
                <li><a href="#" style={aStyle}>Projects</a></li>
                <li><a href="#" style={aStyle}>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;