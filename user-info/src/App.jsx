import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=50&skip=0")
      .then((response) => {
        setUsers(response.data.users);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <div>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <div className="user-grid">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
