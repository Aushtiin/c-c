import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Card } from './Card'
import SideBar from './SideBar'

interface Props {
  
}

const Main = (props: Props) => {
  return (
    <div className='mainp'>
      <Row>
        <Col className='sb' md={3}>
          <SideBar />
        </Col>
        <Col className='mp' md={9}>
          <div className="topbar mb-3">
            <div className="filter">
              <span>Select assets, types and period:</span>
              <a className='span'>FILTER</a>
            </div>
            <div className="unit">
              <span>Units:</span>
              <a id='s1'>%</a>
              <span id='s2'>$</span>
            </div>
            <div className="sort">
              <span>Sort by</span>
              <select>
                <option value="">Trending</option>
              </select>
            </div>
          </div>
          <div className="card">
            <Card/>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Main
