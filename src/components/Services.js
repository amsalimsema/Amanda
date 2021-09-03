import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import invest from '../Images/invest.png'
import consult from '../Images/consulting.png'
import sustain from '../Images/planet-earth.png'

const Wrap = styled(Container)`
  padding: 4rem 0;
  > h4 {
    color: #ffe8d6;
  }
`
const Box = styled.div`
  border-radius: 2rem;
  background-color: #ffe8d6;
  box-shadow: 5px 10px #885c44;
  transition: 0.8s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(2px);
  }
`

export default function Services() {
  return (
    <>
      <div style={{ backgroundColor: '#3f4238' }}>
        <Wrap>
          <h4 className="text-center py-3">
            &#8212;&nbsp;SERVICES&nbsp;&#8212;
          </h4>
          <Row>
            <Col md={4} className="pb-1">
              <Box>
                <div className="p-1">
                  <p className="text-center font-weight-bold">INVESTMENTS</p>
                  <p className="p-5">
                    <img src={invest} alt="investments" className="w-100" />
                  </p>
                  <ul>
                    <li>
                      <p>Investment preparations</p>
                    </li>
                    <li>
                      <p>Securing investment funding from investors</p>
                    </li>
                    <li>
                      <p>Attaining grant investments</p>
                    </li>
                  </ul>
                </div>
              </Box>
            </Col>
            <Col md={4} className="pb-1">
              <Box>
                <div className="p-1">
                  <p className="text-center font-weight-bold">CONSULTING</p>
                  <p className="p-5">
                    <img src={consult} alt="consulting" className="w-100" />
                  </p>
                  <ul>
                    <li>
                      <p>Expanding Company’s Visions</p>
                    </li>
                    <li>
                      <p>Business Structures</p>
                    </li>
                    <li>
                      <p>Efficiencies / Technology</p>
                    </li>
                    <li>
                      <p>Brand Messaging</p>
                    </li>
                    <li>
                      <p>Forensic Accounting</p>
                    </li>
                  </ul>
                </div>
              </Box>
            </Col>
            <Col md={4} className="pb-1">
              <Box>
                <div className="p-1">
                  <p className="text-center font-weight-bold">SUSTAINABILITY</p>
                  <p className="p-5">
                    <img src={sustain} alt="sustainability" className="w-100" />
                  </p>
                  <ul>
                    <li>
                      <p>Sustainability Audit</p>
                    </li>
                    <li>
                      <p>Sustainable Implementation</p>
                    </li>
                  </ul>
                </div>
              </Box>
            </Col>
          </Row>
        </Wrap>
      </div>
    </>
  )
}
