import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
padding: 3em 1em;
background: black;
text-align: center;
width: 100vw;
postition: absolute;
bottom: 0;
box-shadow: 1px 1px 4px;
`

const SocialLink = styled.a`
text-decoration: none;
font-weight: bold;
color: ${props => props.textColor || 'white'};
margin: 1em;
transition: color 250ms;

span {
  color: #0077b6;
}
`

export default function SocialMediaLinks() {
  return (
    <Footer>
      <SocialLink href="https://www.linkedin.com/in/elin-bostr%C3%B6m-6a1616109/">Linked<span>In</span></SocialLink>
      <SocialLink href="https://github.com/elinbostrom">GitHub</SocialLink>
      <SocialLink textColor="#ffadad" href="https://www.instagram.com/elin.bostrom/">Instagram</SocialLink>
      <SocialLink textColor="#0077b6" href="https://www.facebook.com/profile.php?id=100003171103895">Facebook</SocialLink>
    </Footer>
  )
}