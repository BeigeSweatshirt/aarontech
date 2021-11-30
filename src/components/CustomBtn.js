import React from 'react'
import './css/CustomBtn.css';

function CustomBtn(props) {
  return (
    <button id = "getStarted" variant="contained">{props.txt}</button>
  )
}

export default CustomBtn