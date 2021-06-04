import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Card } from './Card'
import SideBar from './SideBar'
import star from '../images/greenstar.png'
import group from '../images/Group 2.png'
import graph from '../images/Positive balance.svg'
// import graph5 from '../images/Negative balance.svg'
import graph6 from '../images/Positive6.png'
import gph from '../images/1.png'
import gph2 from '../images/3.png'
import gph3 from '../images/2.png'
import gph4 from '../images/4.png'
import gph5 from '../images/5.png'

interface Props {
  
}
const Main = (props: Props) => {
  console.log(typeof gph)
  return (
    <div className='mainp'>
      <Row className='m-row'>
        <Col className='sb' md={3}>
          <SideBar />
        </Col>
        <Col className='mp' md={9}>
          <div className="topbar mb-5">
            <div className="filter">
              <span>Select assets, types and period:</span>
              <a href='/#' className='span'>FILTER</a>
            </div>
            <div className="unit">
              <span>Units:</span>
              <a href='/#' id='s1'>%</a>
              <span id='s2'>$</span>
            </div>
            <div className="sort">
              <span>Sort by</span>
              <select>
                <option value="">Trending</option>
              </select>
            </div>
          </div>
          <div className="card-div">
            <Card star={star} group={group} graph={graph} gph={gph} funds={`$34,346.00`} />
            <Card star={star} group={group} graph={graph} gph={gph2} funds={`$329,146.00`} />
            <Card star={star} group={group} graph={graph} gph={gph3} funds={`$129,146.00`} />
            <Card star={star} group={group} graph={graph} gph={gph4} funds={`$46.00`} />
            <Card star={star} group={group} graph={graph6} gph={gph5} funds={`$00.00`} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Main
