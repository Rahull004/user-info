import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img className="avatar" src={user.image} alt={user.firstName} />
      <h2>{user.firstName} {user.lastName}</h2>
      <p><strong>Age:</strong> {user.age} <strong>Gender:</strong> {user.gender}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Title:</strong> {user.company.title}</p>
      <p><strong>University:</strong> {user.university}</p>
      <p><strong>Address:</strong> {user.address.address}, {user.address.city}</p>
    </div>
  );
};

export default UserCard;
