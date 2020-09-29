import React from 'react';
import './App.css';
import styled from 'styled-components'

// * Components
import Navbar from './components/Navbar'
import AboutMeSection from './components/AboutMeSection'
import FreshPictures from './components/FreshPictures'
import SocialMediaLinks from './components/SocialMediaLinks'

// * Styled components

const AppBody = styled.div`
background: url(https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80);
background-position: bottom;
background-size: cover;
height: 100vh;
`

function App() {
  return (
    <AppBody>
      <Navbar />
      <AboutMeSection />
      <FreshPictures />
      <SocialMediaLinks />
    </AppBody>
  );
}

export default App;
