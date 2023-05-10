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
      alert("Input Your Date");
    }
    if (users.nilai >= 80 && users.nilai <= 100) {
      alert("Nilai anda A");
    } else if (users.nilai >= 60 && users.nilai < 80) {
      alert("Nilai anda B");
    } else if (users.nilai >= 40 && users.nilai < 60) {
      alert("Nilai anda C");
    } else if (users.nilai >= 20 && users.nilai < 60) {
      alert("Nilai anda D");
    } else if (users.nilai >= 0 && users.nilai < 20) {
      alert("Nilai anda E");
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
            placeholder="Please Input Your Name"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="nilai"
            placeholder="Your Point"
            value={users.nilai}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
