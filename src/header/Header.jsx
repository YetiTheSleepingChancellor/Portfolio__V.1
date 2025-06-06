import React, {useState} from 'react';
// import React from 'react';
import Button from '../Button.jsx';
import './header.css';
import menuIcon from '../assets/menu.svg';
import Nav from '../nav/Nav.jsx';
import Logo from '../logo.jsx';


function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


    return (
        <>
            <header style={HeaderStyle}>
                <Logo/>

                <Nav className='desktopNav' direction="row" display='flex'/>

                <button className="btn-CV">Download CV</button>

                <div className ="hamburger" onClick={toggleMenu}>
                    <img src={menuIcon} alt="Menu Icon" />
                </div>
            </header>

            {/* show only if menu is open */}
            {isMenuOpen && <Nav className='mobileNav' direction="column"/> }

            
        </>
    )
}


export default Header;