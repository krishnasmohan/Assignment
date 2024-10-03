import React from 'react'
import "./product.css"
import { styles } from '../../styles'
import CardContainer from './product/CardContainer'

export default function Product() {
  return (
    <section className='w-full mx-auto relative product-section'>
      <div className={`absolute top-[180px] inset-0 mx-auto product-wrapper
        ${styles.paddingX} flex justify-center `}>
        <div className='absolute top-[500px] flex justify-center w-full h-[100px] flex-col items-center'>
          <h1 className={`text-[#36748c] font-bold ${styles.heroSubText}`}>
            All Product
          </h1>
          <div className='flex mt-5 py-5 w-[90%] gap-10'>
            <p className={`text-blue-400 font-bold ${styles.sectionSubText}`}>Filter: <span className='text-[#264d71]'> All Products &#x25BC;</span></p>
            <p className={`text-blue-400 font-bold ${styles.sectionSubText}`}>Sort: <span className='text-[#264d71]'> All Products &#x25BC;</span></p>
          </div>
          <div className='h-auto w-full'>
            <CardContainer />
          </div>
          <div className='pt-5'>
            <button className='buy-button'>View all</button>
          </div>
        </div>
      </div>
    </section>
  )
}
