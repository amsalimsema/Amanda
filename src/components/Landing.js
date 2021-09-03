import React from 'react'
// import { motion } from 'framer-motion'
//import Container from 'react-bootstrap/Container'

import styled, { keyframes } from 'styled-components'
import { Bg, ConsultBtn } from './Global'
//import logo from '../logo.svg'

const LandingBg = styled(Bg)`
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 100vw;
  height: 100vh;
  // margin-bottom: 5rem;
`

const Box = styled.div`
  margin-top: 10rem 0.5rem 0 0.5rem;
  padding-top: 2rem;
  text-align: center;
  color: #885c44;
  > h1 {
    font-size: 7vw;
    line-height: 7vh;
    @media only screen and (max-width: 600px) {
      font-size: 3rem;
    }
  }
`

// Create the keyframes
const rotate = keyframes`
  from {
    color: #ffe8d6;
  }

  to {
    color: #885c44;
  }
`

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  animation: ${rotate} 3s linear infinite;
`

export default function Landing() {
  return (
    <>
      <LandingBg>
        <Box>
          <h1>
            <Rotate>Maaemo</Rotate>
          </h1>
          <hr
            style={{
              width: '100px',
              background: '#885c44',
              height: '5px',
              marginTop: '30px',
            }}
          />
          <h5 className="pb-2">ENTERPRISES</h5>
          <h5 style={{ fontStyle: 'italic' }}>
            Investing in sustainable solutions for africa
          </h5>
          <p style={{ fontSize: '18px' }} className="font-weight-normal">
            Agriculture + Manufacturing + Sustainablity = Self Reliant Africa
          </p>
          <ConsultBtn>
            <p>GET IN TOUCH</p>
          </ConsultBtn>
        </Box>
      </LandingBg>
    </>
  )
}
