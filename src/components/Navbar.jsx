import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavigationMenu = styled.nav`
padding: 2em;
background: #000000;
width: 100vw;
box-shadow: 1px 1px 2px gray;
z-index: 10;
display: flex;
justify-content: space-evenly;
align-items: center;

a {
  text-decoration: none;
  color: white;
  font-weight: bold;  
  margin: 1em;

  &:hover {
  color: #ffcdb2;
}
}
`

export default function Navbar({ children }) {
  return (
    <>
      <NavigationMenu>
        <Link to="/">Startpage</Link>
        <Link to="/about-me">About Me</Link>
        <Link to="/images">Fave pics</Link>
        <Link to="/contacts">Contact</Link>
      </NavigationMenu>
      {children}
    </>
  )
}