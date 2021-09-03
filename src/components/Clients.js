import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import invest from '../Images/logo192.png'

const Wrap = styled(Container)`
  padding: 6rem 0 6rem 0;
  > h4 {
    color: #ffe8d6;
  }
`
const Box = styled.div`
  border-radius: 2rem;
  background-color: #ffe8d6;
  box-shadow: 0px 10px #885c44;
  transition: 0.8s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(2px);
  }
`

export default function Clients() {
  return (
    <>
      <div style={{ backgroundColor: '#3f4238' }}>
        <Wrap>
          <h4 className="text-center py-3">
            &#8212;&nbsp;CLIENTS&nbsp;&#8212;
          </h4>
          <Row>
            <Col md={3} className="pb-1">
              <Box>
                <div className="p-4">
                  <p className="text-center font-weight-bold">HYA BIO</p>
                  <p className="p-2">
                    <img src={invest} alt="investments" className="w-100" />
                  </p>
                  <p className="text-center font-weight-bold">PLASTICS</p>
                </div>
              </Box>
            </Col>
            <Col md={3} className="pb-1">
              <Box>
                <div className="p-4">
                  <p className="text-center font-weight-bold">MUVULE</p>
                  <p className="p-2">
                    <img src={invest} alt="consulting" className="w-100" />
                  </p>
                  <p className="text-center font-weight-bold">INVESTMENTS</p>
                </div>
              </Box>
            </Col>
            <Col md={3} className="pb-1">
              <Box>
                <div className="p-4">
                  <p className="text-center font-weight-bold">JAMES IRVING</p>
                  <p className="p-2">
                    <img src={invest} alt="sustainability" className="w-100" />
                  </p>
                  <p className="text-center font-weight-bold">GROOMING</p>
                </div>
              </Box>
            </Col>
            <Col md={3} className="pb-1">
              <Box>
                <div className="p-4">
                  <p className="text-center font-weight-bold">HEKA</p>
                  <p className="p-2">
                    <img src={invest} alt="sustainability" className="w-100" />
                  </p>
                  <p className="text-center font-weight-bold">PRODUCTIONS</p>
                </div>
              </Box>
            </Col>
          </Row>
        </Wrap>
      </div>
    </>
  )
}
