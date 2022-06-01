import './App.css';
import React, { useState } from 'react';

const initialUser = {
  gender: "male",
  name: {
    first: "Casey",
    last: "Harding"
  },
  location: {
    state: "NY"
  },
  email: "C@C.com",
  login: {
    uuid: "blahblahblah",
    username: "CRHarding"
  },
  picture: {
    large: "https://downloadwallpaper.org/wp-content/uploads/2016/05/thor-wallpaper3.jpg"
  }
}

function App() {
  const [user, setUser] = useState(initialUser);
  return (
    <div className="App flex-column">
      <h1>CASEYBOOK</h1>
      { user && (
        <div className="profile-wrapper flex-column">
          <p>{user.gender}</p>
          <p>Name: {user.name.first} {user.name.last}</p>
          <p>Location: {user.location.state}</p>
          <img src={user.picture.large} />
        </div>
      )}
    </div>
  );
}

export default App;
