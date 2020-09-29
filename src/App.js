import React from 'react';
import './App.css';
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom';

// * Components
import Navbar from './components/Navbar'
import AboutMeSection from './components/AboutMeSection'
import FreshPictures from './components/FreshPictures'
import SocialMediaLinks from './components/SocialMediaLinks'
import StartPage from './components/StartPage'

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
      <Switch>

        <Navbar>
          <Route path="/about-me">
            <AboutMeSection />
          </Route>

          <Route path="/images">
            <FreshPictures />
          </Route>

          <Route path="/contact">
            <SocialMediaLinks />
          </Route>

          <Route path="/">
            <StartPage />
          </Route>
        </Navbar>

      </Switch>
    </AppBody>
  );
}

export default App;
