// write the component code here
import React from 'react';
import './usercard.css'; 

const Usercard = () => {
  const profilePhoto = 'https://via.placeholder.com/150';
  const name = 'John Doe';
  const email = 'john.doe@example.com';
  const phoneNumber = '123-456-7890';
  const address = '123 Main St, Anytown, USA';

  return (
    <div className="usercard">
      <img src={profilePhoto} alt="Profile" className="usercard-photo" />
      <h2 className="usercard-name">{name}</h2>
      <p className="usercard-email">Email: {email}</p>
      <p className="usercard-phone">Phone: {phoneNumber}</p>
      <p className="usercard-address">Address: {address}</p>
    </div>
  );
};

export default Usercard;