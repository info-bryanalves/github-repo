import React, { useEffect } from 'react'

import logo from '../assets/logo.png'
import search from '../assets/search.png'

import './header.css'

export default function Header() {

  const buttonStyle = {
    backgroundImage: `url(${search})`
  }

  return (
    <header id="page-header">
      <form>
        <img src={logo} alt="" />
        <input type="text" />
        <button
        type="submit"
        style={buttonStyle}></button>
      </form>
    </header>
  )

}