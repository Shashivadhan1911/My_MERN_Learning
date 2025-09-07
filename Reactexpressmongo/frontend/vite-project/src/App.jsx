import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/users", form);
      // After a successful post, fetch all users again to get the updated list
      fetchUsers();
      setForm({ name: "", email: "", age: "" });
    } catch (err) {
      console.error("Failed to add user:", err);
    }
  };

  return (
    <div className="App" id ='card'>
      <h1>User Management</h1>
      <h2> Vite + React + MongoDB</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          class='input'
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          class='input'
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          class='input'
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />
        <button type="submit" class='button'>Add User</button>
      </form>
      <div>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              Name: {user.name} - Mail: ({user.email}) - Age: {user.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
