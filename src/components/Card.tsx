import React from 'react'
import {Row, Col, Image} from 'react-bootstrap'

interface Props {
  star: string,
  group: string,
  graph: string,
  gph: string,
  funds: string
}

export const Card = (props: Props) => {
  return (
    <div className='cardd'>
      <Row className='align-items-center'>
        <Col className='f-col' md={4}>
          <Row>
            <Col md={2} xs={2}>
              <Image src={props.star} />
            </Col>
            <Col className='c-txt my-auto'>
            <h4 className={`${props.funds ===`$00.00` && `text-muted`}`}>ETH 48 hours</h4>
            <span>Crypto</span>
            </Col>
          </Row>
        </Col>
        <Col md={5} className='s-col'>
          <div className='big px-3'>
            <div className='cole'>
              <div className='tp-img'>
                <div>
                <Image src={props.group} />
                </div>
                <div className='h5div'>
                  <h5>2.2x</h5>
                </div>
              </div>
              <Row>
                <span id='outcome'>Outcome in 6h 41m</span>
              </Row>
            </div>
            <div className='imgparent'>
              <div className="imge">
              <Image height='100' width='' src={props.graph} />
              </div>
            </div>
          </div>
        </Col>
        {/* <Col className='gph'>
        <div className="">
              <Image src={gph} />
            </div>
        </Col> */}
        <Col className='third'>
          <div className="three">
        <div className="">
              <Image src={props.gph} />
            </div> 
            <div className="am-text">
              <h4 className={`${props.funds ===`$00.00` && `text-muted`}`}>{props.funds}</h4>
              <span>Total commitment funds</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
