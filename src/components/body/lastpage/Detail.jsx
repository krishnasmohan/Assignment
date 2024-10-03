import React from 'react'
import "../lastpage/detail.css"
import background from "../../../assets/rectangle.png"
import background2 from "../../../assets/vector-2.png"
import { styles } from '../../../styles'
import ImagePage from './Image'


export default function Detail() {
  return (
    <div className='body'>
        <img src={background2} alt="" className='bg-image2'/>
        <img src={background} alt="" className='bg-image' />
        <div className='flex w-full h-full flex-col lg:flex-row absolute z-10 top-0 max-w-7xl mx-auto items-center justify-center gap-5'>
            <div className='flex flex-col justify-center items-end flex:1'>
                <h4 className={`${styles.heroSubText} text-[#264d71]`}>BEST PRICE</h4>
                <h1 className={`${styles.mainHeadText} text-[#264d71] font-bold`}>Agate Phone Grip</h1>
                <div className='flex justify-center items-center gap-2'>
                    <del className='text-[#6fb5fe] text-[25px]'>44.50$</del><span className={`text-red-500 ${styles.mainHeadText}`}>19.50$</span>
                </div>
                <p className={`${styles.sectionSubText}`}>
                  These Pop Rock Crystal grip tops can be swapped with <br className='lg:block hidden'/>
                  other tops depending on your mood, outfit, nails, <br className='lg:block hidden'/>
                  phone case, holiday, etc.! Just gently squeeze the sides <br className='lg:block hidden'/>
                  to remove and swap out with another color or design!
                </p>
                <button className='button-1'>BUY NOW</button>
            </div>
            <div className='flex justify-center items-center'>
              <ImagePage />
            </div>
        </div>
    </div>
  )
}
