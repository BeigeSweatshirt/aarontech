import { useNavigate } from 'react-router-dom';
import "../Ticket.css"

function Ticket(props) {
  // const history = useNavigate();
  // function handleSumbmit() {
  // const USER = document.getElementById('user').value;
  // alert(name);
  // sessionStorage.setItem("USER", USER);
  // console.log(sessionStorage.getItem("NAME"));
  // history("/account");
}

// const handleFormSubmit = (event) => {
const navigate = useNavigate();
//   history("/account");
//   props.history.push("/account",
//     { state: document.getElementById('desc').value }
//   );
// }

return (
  <div className="App" >
    <form onSubmit={handleSumbmit}>
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
      <input
        type="text"
        id="desc"
        placeholder="Describe your problem">
      </input>
      <input
        type="submit"
        value="Submit">
      </input>
    </form>
  </div>
);
}
export default Ticket;
