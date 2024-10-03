import React, { Fragment } from 'react'
import { styles } from '../../styles'
import product from "../../assets/product.png"
import curve from "../../assets/curve.png"

export default function Home() {
  return (
    <main className='w-full relative h-[90vh] mx-auto'>
        <div className={`inset-0 mx-auto w-full h-[90vh]
          ${styles.paddingX} flex items-center gap-5 flex-col lg:flex-row`}>
            <div className='flex flex-col justify-center w-[60%] md:w-[80%] sm:w-[80%]'>
              <h4 className={`${styles.heroSubText} text-[#fff]`}>
                Welcome to
              </h4>
              <h1 className={`${styles.mainHeadText} text-[#fff]`}>
                Pop Rock Crystal Shop !
              </h1>
              <p className={`${styles.sectionSubText}`}>
              Here you will find unique phone accessories, crystals, <br className='lg:block hidden'/>
              jewelry and more. Free shipping inside the U.S. and our <br className='lg:block hidden'/>
              phone grips come with a limited warranty. Enjoy!
              </p>
              <div className='flex items-center gap-5'>
                <button className='bg-[#fff] hover:bg-black text-[#548a9e] font-bold lg:py-5 md:py-5 sm:py-3 px-12 rounded-2xl text-[20px] sm:text-[15px]'>SHOP NOW</button>
                <p className={`${styles.sectionSubText}`}>about us</p>
              </div>
            </div>
            <div className='flex lg:w-[800px] h-[800px] items-center '>
              <div className='w-full h-[80%] bg-[#fff] rounded-[10%] relative z-10 shadow-lg'>
                <div className='relative w-[115px] h-[53px] bg-[#8a93e5] top-[15%] rounded-tr-xl rounded-br-xl'>
                  <p className='w-full h-full flex items-center justify-center text-[18px]'>New lot</p>
                </div>
                <div className='flex flex-col w-full h-full items-center justify-center'>
                  <img src={product} alt="product" className='lg:w-[400px] h-auto md:w-[150px] sm:w-[140px] xs:w-[100px] w-[150px]' />
                  <h2 className='text-[#adadad] lg:text-[23px] md:text-[15px] sm:text-[15px]'>CRYSTAL AGATE PHONE GRIP <span className='text-[#548a9e] font-bold'>- 18.99$</span></h2>
                </div>
              </div>
            </div>
        </div>
        <div className='absolute bottom-[-250px] index-1 w-full'>
          <img src={curve} alt="" className='w-full h-auto curve' />
        </div>
    </main>
  )
}
