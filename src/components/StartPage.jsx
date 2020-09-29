import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function StartPage() {
  return (
    <Headline>
      Portfolio
    </Headline>
  )
}


const Headline = styled.h1`
text-align: center;
padding: 2em;
font-size: 3rem;
color:  #ffcdb2;
text-shadow: 1px 1px 2px black;
`