import React from 'react'
import './Thirdsection.css'
import CardThirdSection from '../CardThirdsection/CardThirdSection'
export default function Thirdsection({children}) {
  return (
      <>
      <div className='Thirdsection'>
         <div className='Thirdsection_container'>
            <div className='Thirdsection_container_text'>
                <h1 className='Thirdsection_container_text_h1'>OUR SERVICES</h1>
                <p className='Thirdsection_container_text_p'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className='Thirdsection_container_cards'>
             <div className='Thirdsection_container_card'>
             {children.map((x) => {
        return (
          <CardThirdSection
            key={x.id}
            icon={x.icon}
          
          />
        );
      })}
             </div>
            </div>
         </div>
      </div>
      </>
  )
}
