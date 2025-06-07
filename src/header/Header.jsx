import React, {useState, useEffect} from 'react';
import Button from '../button/Button.jsx';
import './header.css';
import menuIcon from '../assets/menu.svg';
import Nav from '../nav/Nav.jsx';
import Logo from '../logo.jsx';


function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
    
        const handelResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handelResize);
        return () => window.removeEventListener('resize', handelResize);
    },[isMenuOpen]);

    const HeaderStyle = {
        // backgroundColor: '#333',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '56px',
        padding: '20px',
        position: 'absolute',

    };

    const mobileNavStyle = {
        position: 'relative',
        top: '56px',
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
        color: '#333',
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


    return (
        <>
            <header style={HeaderStyle}>
                <Logo/>

                <Nav className='desktopNav' direction="row" display='flex'/>


                <div className ="hamburger" onClick={toggleMenu}>
                    <img src={menuIcon} alt="Menu Icon" />
                </div>
            </header>


            <div style={mobileNavStyle}>
                {isMenuOpen && <Nav className='mobileNav' direction="column" display='flex'/> }
            </div>

            
        </>
    )
}


export default Header;