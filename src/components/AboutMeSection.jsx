import React from 'react';
import styled from 'styled-components';
import ProfilePic from '../5.jpg';

const AboutMeWrapper = styled.div`
margin-left: 1em;
display: flex;
flex-direction: column;
width: 100vw;
align-items: center;
`

const Headline = styled.h1`
margin: 1em;
font-size: 2.5rem;
color: black;
`

const AboutMe = styled.div`
max-width: 800px;
width: 100%;
background: white;
box-shadow: 1px 1px 4px gray;
margin: 1em 0;
display: grid;
grid-template: 1fr / auto 1fr;
border-radius: 5px;
`


const AboutMeText = styled.div`
padding: 1em;
margin: 1em 2em;
display: grid;
grid-template: repeat(4, auto) / auto 1fr;
gap: 0.5em;
`

const AboutMePicture = styled.div`
max-width: 250px;
height: 100%;

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px 0 0 5px;
}
`

const InfoTitle = styled.p`
font-weight: bold;
color: #6d6875;
margin-right: 1em;
`

export default function AboutMeSection() {
  return (
    <AboutMeWrapper>
      <Headline>Om mig</Headline>
      <AboutMe>
        <AboutMePicture>
          <img src={ProfilePic} alt="Elin" />
        </AboutMePicture>
        <AboutMeText>
          <InfoTitle>Namn:</InfoTitle> <p>Elin</p>
          <InfoTitle>Tidigare jobbat med:</InfoTitle> <p>Butikssäljare på Cervera</p>
          <InfoTitle>Har under kursen lärt mig:</InfoTitle><p>Skapa komponenter, useState, useEffect, useRef, useContext, arbeta i grupp och styled components.</p>
          <InfoTitle>Vill fortsätta lära mig:</InfoTitle> <p>Vill nöta allt om och om igen :)</p>
        </AboutMeText>
      </AboutMe>
    </AboutMeWrapper>
  )
}