import React from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";
import Navbar from "./Navbar";
import Spinner from "./Common/Spinner";

const UserDirectory = ({ users, loading, usersPerPage, totalUsers, currentPage, paginate }) => {
  const navigate = useNavigate();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleUserClick = (user) => {
    navigate(`/user/${user.id}`);
  };

  return (
    <>
      <Navbar userCount={totalUsers} />
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="directory-header">
              <h2>Select a User Profile</h2>
              <p>Click on any profile icon to view detailed information</p>
            </div>
            <div className="user-icons-grid">
              {users.map((user) => (
                <UserCard 
                  key={user.id} 
                  user={user} 
                  onClick={handleUserClick}
                  iconOnly={true}
                />
              ))}
            </div>
            <div className="pagination">
              <button 
                onClick={() => paginate(currentPage - 1)} 
                disabled={currentPage === 1}
              >
                Previous
              </button>
              
              {pageNumbers.map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={currentPage === number ? 'active' : ''}
                >
                  {number}
                </button>
              ))}
              
              <button 
                onClick={() => paginate(currentPage + 1)} 
                disabled={currentPage === pageNumbers.length}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserDirectory;