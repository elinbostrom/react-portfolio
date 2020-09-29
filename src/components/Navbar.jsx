import React from 'react'
import styled from 'styled-components'


const NavigationMenu = styled.nav`
padding: 2em;
background: #000000;
width: 100vw;
box-shadow: 1px 1px 2px gray;
z-index: 10;
`

const NavigationLink = styled.a`
text-decoration: none;
color: white;
font-weight: bold;
margin: 1em;
margin-right: ${props => props.linkToLeft};
cursor: pointer;

&:hover {
  color: #ffcdb2;
}
`

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationLink linkToLeft="auto" href="/">Elin Boström</NavigationLink>
    </NavigationMenu>
  )
}