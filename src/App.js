import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState({ name: "", nilai: "" });
  console.log(users.name, "ini nama");
  console.log(users.nilai, "ini nilai");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsers({ ...users, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(users.nilai);
    if (users.name === "" || users.nilai === "") {
      alert("isi data");
      if (users.nilai > 80) {
        alert("anda di peringkat A");
      }
      if (users.nilai < 80) {
        alert("anda di peringkat B");
      } else {
      }
    }
    if (users.nilai > 80) {
      alert("anda di peringkat A");
    }
    if (users.nilai < 80) {
      alert("anda di peringkat B");
    } else {
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <input
            type="text"
            name="name"
            value={users.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="nilai"
            value={users.nilai}
            onChange={handleInputChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
