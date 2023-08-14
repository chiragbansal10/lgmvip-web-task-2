import "./App.css";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    console.log("before ");
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    setUsers(jsonresponse);
  };
  return (
    <div className="App">
      <h1>Hello All</h1>
      <button onClick={loadUsers}>Get Data</button>
      <h2>Users:</h2>
      <ul>
        {users.map(({ id, email, avatar }) => (
          <li key={id}>Name: {email}
          Avator: {avatar}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
