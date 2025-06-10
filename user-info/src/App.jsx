import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import UserDirectory from "./components/UserDirectory";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

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


  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <UserDirectory
                users={currentUsers}
                loading={loading}
                usersPerPage={usersPerPage}
                totalUsers={users.length}
                currentPage={currentPage}
                paginate={paginate}
              />
            }
          />
          <Route path="/user/:id" element={<UserProfile users={users} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
