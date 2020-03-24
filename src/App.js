import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Profile from './components/Profile'
import './App.css';

function App() {

  const [user, setUser] = useState([])

  return (
    <>
      {user.name}
      <Header setUser={setUser}/>
      <main id="page-container">
        <Profile user={user}/>
        <article>
          Article
        </article>
      </main>
    </>
  );
}

export default App;
