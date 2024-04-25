import React from 'react'
import './CardThirdsection.css'
export default function CardThirdSection({icon}) {
  return (
   <>
    <div className='Thirdsection_card_container'>
      <span className='Thirdsection_card_icon__span'>
        <span className='Thirdsection_card_icon'>
          <i class={icon}></i>
        </span>
      </span>
      <h3 className='Thirdsection_card_h3'>On Time Service</h3>
      <p className='Thirdsection_card_p'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
     <a className='Thirdsection_card_a' href="">Read More</a>
    </div>
   </>
  )
}
