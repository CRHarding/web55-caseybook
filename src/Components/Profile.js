import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="profile-wrapper flex-column">
      <p>{user.gender}</p>
      <p>Name: {user.name.first} {user.name.last}</p>
      <p>Location: {user.location.state}</p>
      <img src={user.picture.large} />
    </div>
  )
}

export default Profile;