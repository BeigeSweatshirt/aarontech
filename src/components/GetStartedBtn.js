import React from 'react'
import { Link } from 'react-router-dom';
import './css/Button.css';

function GetStartedBtn() {
    return (
      <Link to='/ticket' className="btn--large">Get Started Today</Link>
    )
}

export default GetStartedBtn