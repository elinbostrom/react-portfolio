import React from 'react'
import styled from 'styled-components'

// * Pictures
import Picture1 from '../blake-richard-verdoorn-cssvEZacHvQ-unsplash.jpg'
import Picture2 from '../boxed-water-is-better-dO2WTawCTC4-unsplash.jpg'
import Picture3 from '../peter-jan-rijpkema-wI6o8OwUwdw-unsplash.jpg'
import Picture4 from '../v2osk-1Z2niiBPg5A-unsplash.jpg'


// * Styled components

const ImgContainer = styled.div`
width: 100vw;
display: grid;
grid-template: 1fr / repeat(4, 1fr);
box-shadow: 1px 1px 3px gray;
min-height: 400px;
justify-content: center;

img {
  object-fit: cover;
  max-width: 400px;
  width: 100%;
  max-height: 400px;
  height: 100%;
}
`



export default function FreshPictures() {
  return (
    <ImgContainer>
      <img src={Picture1} alt="pic1" />
      <img src={Picture2} alt="pic2" />
      <img src={Picture3} alt="pic3" />
      <img src={Picture4} alt="pic4" />
    </ImgContainer>
  )
}