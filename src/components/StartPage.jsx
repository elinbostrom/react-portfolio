import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function StartPage() {
  return (
    <LinkWrapper>
      <Link to="/">Startpage</Link>
      <Link to="/about-me">About Me</Link>
      <Link to="/images">Pictures</Link>
      <Link to="/contact">Contact</Link>
    </LinkWrapper>
  )
}

const LinkWrapper = styled.div`
display: flex;
flex-direction: column;
place-content: center;
padding: 3em;
background: rgba(0, 0, 0, 0.7);
box-shadow: 1px 1px 3px;

a {
  color: white;
  font-weight: bold;
  margin: 1em;
}
`