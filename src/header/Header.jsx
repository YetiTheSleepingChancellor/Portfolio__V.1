import React from 'react';
import Button from '../Button.jsx';
import './header.css';
import menuIcon from '../assets/menu.svg';
import Nav from '../nav/Nav.jsx';

function Header({toggleMenu}) {
    const HeaderStyle = {
        backgroundColor: '#333',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '56px',
        padding: '0 20px',
    };


    return (
        <>
            <header style={HeaderStyle}>
                <div>SandipDev</div>

                <Nav className="row" />

                <button className="btn-CV">Download CV</button>

                <div className ="hamburger" onClick={toggleMenu}>
                    <img src={menuIcon} alt="Menu Icon" />
                </div>
            </header>

            <Nav className="column"/>

        </>
    )


}

export default Header;