import React, { useState } from 'react';
import Header from './components/Header'
import Profile from './components/Profile'
import './App.css';

function App() {

  const [user, setUser] = useState({})

  return (
    <>
      <Header setUser={setUser} />
      
      {Object.keys(user).length > 0 &&
        <main id="page-container">
          <Profile user={user} />
          <article>
            Article
        </article>
        </main>
      }
    </>
  );
}

export default App;
