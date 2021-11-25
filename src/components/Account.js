import React from 'react';
import NavBar from "./NavBar";
import TicketTable from './TicketTable';
import Footer from "./Footer";
import { useTable } from 'react-table';
import AddIcon from '@material-ui/icons/Add';
import { Button } from "@material-ui/core";
import { useNavigate } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import newTicket from './TicketTable';


const StyledButton = withStyles({
  root: { 
      display: 'block',
      margin: "auto",
      alignItems: "center",
      textAlign: "auto",
      justifyContent: "center",
      borderRadius:'20px',
      width: 'auto',
      variant: 'h6',
      fontSize: '40px',
      boxSizing: "border-box",
      fontFamily:'Roboto',
      "&:hover": {
          background: "#fff",
          color:  "#242424",
          border: "2px solid #232e3a"
      },
      background: "#232e3a", 
      color: "#fff",
      transform: "none",
      transition: "background .3s,border-color .3s,color .3s",
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);


var ex = sessionStorage.getItem('NAME');
function Account() {

   window.addEventListener('onload', () =>{
     const NAME = sessionStorage.getItem('NAME');
     document.getElementById('NAME').innerHTML= NAME;
     const USER = sessionStorage.getItem("USER");
     document.getElementById('USER').innerHTML = USER;
   })
  return(
    <div className = "App">
  <NavBar/>
  <TicketTable/>
  <Footer/>
  </div>
  );
}

export default Account;