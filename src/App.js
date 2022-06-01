import './App.css';
import React, { useState } from 'react';

import initialUser from "./data";

import Profile from "./Components/Profile";

function App() {
  const [user, setUser] = useState(initialUser);
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
