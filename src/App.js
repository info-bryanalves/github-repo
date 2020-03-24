import React, { useState } from 'react';
import Header from './components/Header'
import Profile from './components/Profile'
import Repository from './components/Repository'

import './App.css';

function App() {

  const [user, setUser] = useState({})
  const [repositories, setRepositories] = useState([])

  return (
    <>
      <Header setUser={setUser} setRepositories={setRepositories} />

      {Object.keys(user).length > 0 &&
        <main id="page-container">
          <Profile user={user} />
          <Repository repositories={repositories} />
        </main>
      }
    </>
  );
}

export default App;
