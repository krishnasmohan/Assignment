import React, { Fragment } from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap'
import image from "../../../assets/product.png"
import "../product.css"

export default function CardProduct({product}) {
  return (
    <Fragment>
        <Card className='custom-card'>
            <CardImg className='py-3 card-img' variant='top' src={image} />
            <CardBody className='text-center'>
                <CardTitle className='fs-6'>
                    {product.title}
                </CardTitle>
                <h5 className='price'>{product.price}$</h5>
                <button className='buy-button'>BUY NOW</button>
            </CardBody>
        </Card>
    </Fragment>
  )
}
