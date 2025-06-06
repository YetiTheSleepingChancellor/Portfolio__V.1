import React from 'react';
import Button from './Button.jsx';

function Header() {
    const HeaderStyle = {
        backgroundColor: '#333',
        display: 'flex',
        width: '100%',
        height: '56px',
    };

    return (
        <header style={HeaderStyle}>
            <div>SandipDev</div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            <button className="btn-CV">Download CV</button>
        </header>
    )


}

export default Header;