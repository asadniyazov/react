import React from 'react'
import Cardmiddlesection from '../CardMiddlesection/Cardmiddlesection'
import './middlesection.css'
export default function Middlesection() {
  return (
  <> 
  <div className='Middlesection'>
  <div className='Middlesection_container'>
   <div className='Middlesection_container_div'>
    <div className='Middlesection_container_div_icon'><i class="fa-solid fa-coins middlesection_icon"></i></div>
     <Cardmiddlesection></Cardmiddlesection>
   </div>
   <div className='Middlesection_container_div'>
   <div className='Middlesection_container_div_icon'><i class="fa-solid fa-shield-halved middlesection_icon"></i></div>
     <Cardmiddlesection></Cardmiddlesection>
   </div>
   <div className='Middlesection_container_div'>
   <div className='Middlesection_container_div_icon'><i class="fa-solid fa-piggy-bank middlesection_icon"></i></div>
     <Cardmiddlesection></Cardmiddlesection>
   </div>
  </div>

  </div>
  </>
  )
}
