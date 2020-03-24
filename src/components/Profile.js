import React from 'react'

import './profile.css'

export default function Profile({ user }) {
  return (
    <aside id="page-profile">
      <div className="photo">
        <img src={user.avatar_url} alt="" />
      </div>
      <div className="info">
        <span>{user.name}</span>
        <span>{user.login}</span>
      </div>
    </aside>
  )
}