import React from 'react'
//import Container from 'react-bootstrap/Container'

import styled from 'styled-components'
import { Bg, ConsultBtn } from './Global'
//import logo from '../logo.svg'

const LandingBg = styled(Bg)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Box = styled.div`
  color: #885c44;
  text-align: center;
  > h1 {
    font-size: 8vw;
    line-height: 8vh;
    @media only screen and (max-width: 600px) {
      font-size: 3rem;
    }
  }
`

export default function Landing() {
  return (
    <>
      <LandingBg>
        <Box>
          <h5 className="pb-2">PLANET</h5>
          <h1>EARTH</h1>

          <hr
            style={{
              width: '100px',
              background: '#885c44',
              height: '5px',
              marginTop: '30px',
            }}
          />
          <p className="pb-2">SOLUTIONS FOR A SUSTAINABLE FUTURE</p>
          <p style={{ fontSize: '18px' }}>
            Dedicated To Transforming Business To Create A More Sustainable
            Future For All
          </p>
          <ConsultBtn>
            <p>GET STARTED</p>
          </ConsultBtn>
        </Box>
      </LandingBg>
    </>
  )
}
