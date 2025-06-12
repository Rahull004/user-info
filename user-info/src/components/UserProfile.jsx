import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserProfile = ({ users }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const user = users.find(u => u.id === parseInt(id));

  const handleBack = () => {
    navigate("/");
  };

  if (!user) {
    return (
      <div className="user-profile-container">
        <div className="profile-header">
          <button className="back-button" onClick={handleBack}>
            ← Back to Directory
          </button>
          <div className="header-content">
            <h1>User Not Found</h1>
            <p>The requested user could not be found</p>
          </div>
        </div>
      </div>
    );
  }
  const getAvatarColor = (id) => {
    const colors = [
      "#3B82F6", "#10B981", "#8B5CF6", "#F59E0B", "#EF4444",
      "#06B6D4", "#84CC16", "#F97316", "#EC4899", "#6366F1",
    ];
    return colors[id % colors.length];
  };

  return (
    <div className="user-profile-container">
  
      <div className="profile-header">
        <button className="back-button" onClick={handleBack}>
          ← Back to Directory
        </button>
        <div className="header-content">
          <h1>User Profile</h1>
          <p>Detailed information</p>
        </div>
      </div>

    
      <div className="profile-content">
        <div className="profile-card">
         
          <div className="profile-card-header">
            <div 
              className="profile-avatar-large"
              style={{ backgroundColor: getAvatarColor(user.id) }}
            >
              <img 
                src={user.image} 
                alt={user.firstName}
                className="avatar-large"
              />
            </div>
            <h2>{user.firstName} {user.lastName}</h2>
            <p className="profile-title">{user.company.title}</p>
            <p className="profile-company">{user.company.name}</p>
          </div>

          <div className="profile-details">
            <div className="details-section">
              <h3>Personal Information</h3>
              <div className="detail-item">
                <span className="detail-label">Age:</span>
                <span className="detail-value">{user.age}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Gender:</span>
                <span className="detail-value">{user.gender}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Username:</span>
                <span className="detail-value">{user.username}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">University:</span>
                <span className="detail-value">{user.university}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Birth Date:</span>
                <span className="detail-value">{user.birthDate}</span>
              </div>
            </div>

            <div className="details-section">
              <h3>Contact Information</h3>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value detail-email">{user.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">{user.phone}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Address:</span>
                <span className="detail-value">
                  {user.address.address}, {user.address.city}, {user.address.state}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Department:</span>
                <span className="detail-value">{user.company.department}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;