import React, { useState } from "react";
import './TicketTable.css';
import data from './mock-data.json';

function TicketTable() {
  const [tickets, setTickets] = useState(data);

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    
    var newTicket = {
      id: tickets.at(-1).id + 1,                          //Gets Last ID of table and increments it by one
      date: todaysDate(),                                 //Returns date in MM/DD/YYYY format
      status: "Received",                                 //...Just returns "received"
      description: document.getElementById("desc").value  //Returns the description passed to it.
    };
    const newTickets = [...tickets, newTicket];
    setTickets(newTickets);
  };

  var todaysDate = () => {
    var today = new Date();
    var dd = String(today.getDate() + 2).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today;
  }

  return <div className="app-container">
  <table>
    <thead>
      <tr>
        <th>Ticket ID</th>
        <th>Date</th>
        <th>Status</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {tickets.map((ticket) => (
        <tr>
          <td>{ticket.id}</td>
          <td>{ticket.date}</td>
          <td>{ticket.status}</td>
          <td>{ticket.description}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <form onSubmit={handleAddFormSubmit} >
    <input 
      id="desc"
      type="text"
      name="description"
      placeholder="Describe the problem..."
    />
    <button type="submit">Add</button>
  </form>
</div>;
};
  
export default TicketTable;
