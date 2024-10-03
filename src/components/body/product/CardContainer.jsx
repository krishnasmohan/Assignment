import React, { Fragment } from 'react'
import { Col, Container, Row } from "react-bootstrap"
import { products } from '../../../constants'
import CardProduct from './CardProduct'
export default function CardContainer() {
  return (
    <Fragment>
        <div className='mx-5'>
            <Row>
                {
                    products && products.map((p,index) => (
                        <Col xs={8} sm={6} md={3} className='mb-2 p-2' key={index}>
                            <CardProduct product={p}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
        
    </Fragment>
  )
}
