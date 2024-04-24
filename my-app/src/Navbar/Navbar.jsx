import React from 'react'
import "./Navbar.css"
export default function Navbar() {
  return (
   <>
   <div className='Navbar'>
     <div className='Navbar_container'>
        <div className='Navbar_container_a_div'>
         <a className='Navbar_container_a' href="">Financier</a>
        </div>
        <div className='Navbar_container_ul'>
            <ul className='Navbar_container_list'>
                <li><a className='Navbar_container_list_a' href="">Home</a></li>
                <li><a className='Navbar_container_list_a' href="">Solutions</a></li>
                <li><a className='Navbar_container_list_a' href="">Services</a></li>
                <li><a className='Navbar_container_list_a' href="">Contact Us</a></li>
            </ul>
        </div>
      <a id='Navbar_container_a'>
        <span id='Navbar_container_a_icon'><i class="fa-solid fa-phone"></i></span> 
        <span id='Navbar_container_a_text'>123-489-9381</span>
        </a>
        <button className='Navbar_hidden_btn' ><i class="fa-solid fa-bars"></i></button>
     </div>
   </div>
   </>
  )
}
