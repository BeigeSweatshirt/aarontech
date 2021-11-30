import React from 'react';
import './css/HeroSection.css';
import './css/App.css';
import { Link } from 'react-router-dom';
import './css/Button.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='./grid.mp4' autoPlay loop muted />
            <h1>AARONTECH</h1>
            <p>Computer upgrades and repair. Right at your doorstep.</p>
            {/* <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get Started
                </Button>
            </div> */}
            <br/><br/><br/><br/><br/><br/>
            <Link to='/ticket' className="btn--large">Get Started Today</Link>
        </div>
    )
}

export default HeroSection
