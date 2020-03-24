import React, { useState, useRef, useEffect } from 'react'

import logo from '../assets/logo.png'
import search from '../assets/search.png'

import './header.css'

export default function Header() {

  const [username, setUsername] = useState('')
  const inputRef = useRef(null)

  const handleGetUser = async (e) => {
    e.preventDefault()

    if (!username) {
      inputRef.current.focus()
      return false
    }

    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()

    if (data) {
      alert('Usuário não encontrado!')
    }
    
    console.log(data)
  }

  const buttonStyle = {
    backgroundImage: `url(${search})`
  }

  return (
    <header id="page-header">
      <form onSubmit={handleGetUser}>
        <img src={logo} alt="" />
        <input
          ref={inputRef}
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Digite seu usuário do GitHub"
        />
        <button
          type="submit"
          style={buttonStyle}></button>
      </form>
    </header>
  )

}