import React, { Fragment } from 'react'
import "./detail.css"
import pro from "../../../assets/product.png"

export default function ImagePage() {
  return (
    <Fragment>
        <div className='w-[600px] h-[600px] relative z-20 rounded-full round-border shadow-lg'>
            <div className='w-[400px] h-[400px] absolute left-[90px] bottom-[100px] z-30 rounded-full round-border shadow-lg flex items-center justify-center'>
                <img src={pro} alt="" className='lg:w-[330px] h-auto md:w-[120px] sm:w-[100px] xs:w-[70px] w-[130px]' />
            </div>
        </div>
    </Fragment>
  )
}
