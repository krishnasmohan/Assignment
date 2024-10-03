import React, { Fragment } from 'react'
import { Link } from "wouter"
import cart from "../../assets/cart.png"

export default function CartLogo() {
  return (
    <Link to={`/cart`}>
        <div className='flex gap-2 items-center'>
            <span className='bg-red-500 p-1 rounded-xl'>00</span>
            <span>
                <img src={cart} alt="cart" className='w-[30px]' />
            </span>
        </div>
    </Link>
  )
}
