import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import initialUser from "./data";

import Profile from "./Components/Profile";

function App() {
  const [user, setUser] = useState(initialUser);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5")
      .then(res => {
        console.log(res.data.results);
      }).catch(err => console.error(err));
  }, [])
  
  return (
    <div className="App flex-column">
      <h1>CASEYBOOK</h1>
      { user && (
        <Profile user={user} />
      )}
    </div>
  );
}

export default App;
