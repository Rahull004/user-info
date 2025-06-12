import React from "react";

const UserCard = ({ user, onClick, iconOnly = false }) => {

  const getAvatarColor = (id) => {
    const colors = [
      "#3B82F6", // blue
      "#10B981", // emerald
      "#8B5CF6", // violet
      "#F59E0B", // amber
      "#EF4444", // red
      "#06B6D4", // cyan
      "#84CC16", // lime
      "#F97316", // orange
      "#EC4899", // pink
      "#6366F1", // indigo
    ];
    return colors[id % colors.length];
  };

  const handleClick = () => {
    if (onClick) {
      onClick(user);
    }
  };

 
  if (iconOnly) {
    return (
      <div className="user-icon-container" onClick={handleClick}>
        <div 
          className="user-icon"
          style={{ backgroundColor: getAvatarColor(user.id) }}
        >
          <img 
            src={user.image} 
            alt={user.firstName}
            className="icon-avatar"
          />
        </div>
        <span className="user-name-small">
          {user.firstName}
        </span>
      </div>
    );
  }


  return (
    <div className="user-card" onClick={handleClick}>
      <img src={user.image} alt={user.firstName} className="avatar" />
      <h3>{user.firstName} {user.lastName}</h3>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Title:</strong> {user.company.title}</p>
      <p><strong>University:</strong> {user.university}</p>
      <p><strong>Address:</strong> {user.address.address}, {user.address.city}</p>
    </div>
  );
};

export default UserCard;