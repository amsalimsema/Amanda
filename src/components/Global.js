import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import landing from '../Images/now.jpg'

// general link

export const GenLink = styled(Link)`
  color: #885c44;
  text-decoration: none;
  padding: 0rem 0rem;
  &:hover {
    text-decoration: none;
    color: #885c44;
    border-bottom: 3px solid #885c44;
  }
`

// background attributes for hopes
export const Bg = styled.div`
  background-image: url(${landing});
  height: 50vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.8s ease-in-out;
  //   filter: grayscale(1);
  @media only screen and (max-width: 600px) {
    // filter: grayscale(1);
  }
`

// used in nav and navelements for hopes

export const Container = styled.div`
  z-index: 1;
  width: 80vw;
  margin-right: 10vw;
  margin-left: 10vw;
`

// landing button for hopes
export const ConsultBtn = styled(Button)`
  padding: 0.7rem 2rem 0 2rem;
  margin: 2rem auto;
  border-radius: 4rem;
  background-color: #885c44;
  border: 0;
  &:hover {
    background-color: #ddbea9;
    color: #885c44;
  }
  @media only screen and (max-width: 568px) {
    padding: 0.7rem 0 0 0;
    width: 60%;
  }
`
// mobile drawer button for hopes
export const ConsultBtnMob = styled(Button)`
  font-size: 1rem;
  background-color: #885c44;
  border-radius: 3rem;
  border: 0;
  padding: 0.7rem 2rem;
`
