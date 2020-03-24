import React, { useState, useRef, useEffect } from 'react'

import logo from '../assets/logo.png'
import search from '../assets/search.png'

import './header.css'

export default function Header(props) {

  const [username, setUsername] = useState('')
  const inputRef = useRef(null)

  const handleGetUser = async (e) => {
    e.preventDefault()

    if (!username) {
      inputRef.current.focus()
      return false
    }

    const response = await fetch(`https://api.github.com/users/${username}`)
    
    if (response.status == 404) {
      
      inputRef.current.focus()
      inputRef.current.value = 'Usuário não encontrado!'
      return false
    }

    const data = await response.json()
    
    props.setUser(data) 
    handleGetRepositories()   
  }

  const handleGetRepositories = async () => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`)
    const data = await response.json()

    props.setRepositories(data)
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