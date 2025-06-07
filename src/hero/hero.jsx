import React from 'react';

function Hero() {
    const heroStyle = {
        height: '100vh',
        padding: '20px'
    }

    const heroContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: '5px',
        color: '#f4f4f4',
        padding: '20px',
        height: '100%',
        gap: '20px',
    }

    return (
        <section className="hero" style={heroStyle}>
            <div className="heroContainer" style={heroContainerStyle}>
                <h1>Hello, I'm Sandip</h1>
                <h2>Aspiring Full Stack Developer</h2>
                <p>Currently diving deep into JavaScript and building cool stuff.</p>
            </div>
        </section>
    )
}

export default Hero;