import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>User Directory</h4>
          <p>Comprehensive user management system</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <p>Home | Profiles | Contact</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>info@userdirectory.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 User Directory. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;