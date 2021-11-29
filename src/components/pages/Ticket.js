import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../Ticket.css"

export function getProps() {
  let state = {
    data: document.getElementById('desc').value
  }
  return state;
}

function Ticket(props) {
  const [desc, setDesc] = useState("");

  function inputDescription() {
    setDesc(document.getElementById('desc').value);
  }

  


  //console.log(updatedName);  
  // const history = useNavigate();
  // function handleSumbmit() {
  // const USER = document.getElementById('user').value;
  // alert(name);
  // sessionStorage.setItem("USER", USER);
  // console.log(sessionStorage.getItem("NAME"));
  // history("/account");


  return (
    <div className="App" >
      <input
        type="text"
        id="uname"
        placeholder="Username">
      </input>
      <input
        type="text"
        id="email"
        placeholder="Email">
      </input>
      <input
        type="text"
        id="pword"
        placeholder="Password">
      </input>
      <input onChange={inputDescription}
        type="text"
        id="desc"
        placeholder="Describe your problem">
      </input>
      <Link
        to={{
          pathname: "/account",
        }}
        state={{ desc: desc }}>

        <input
          type="submit"
          value="Submit">
        </input>
        </Link>
    </div >
  );
}

export default Ticket;