import React from 'react'
import './Herosection.css'
export default function Herosection() {
  return (
    <>
    <div className='herosection'>
        <div className='herosection_container'>
            <div className='herosection_container_text'>
                <h1 className='herosection_container_text_h1'>We Help Grow Your Business</h1>
                <p className='herosection_container_text_p'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className='herosection_container_text_btn'>
                    <div className='Contactbtn_div'>
                    <a className='Contactbtn' href="">Contact Us</a>

                    </div>
                    <a className='watchbtn' href="">Watch video</a>
                </div>
            </div>
            <div className='herosection_container_img'>
                <img className='herosection_container_img1' src="https://preview.colorlib.com/theme/financier/images/img_6.jpg" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}
