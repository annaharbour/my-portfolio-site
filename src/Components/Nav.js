import React, {useState} from 'react'
import Links from './Links'

function Nav ({selected, handleSelection}) {
 const [isOpen, setIsOpen] =useState(false)
 const pages = ['About', 'Skills', 'Contact', 'Demos']

  return (
    <div>
      <Links/>      
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)} style={{color: isOpen ? "grey" : '#B267E6'}}><i className="fa-solid fa-bars"></i></button>
        <nav style={{display: isOpen ? "block" : "none"}}>  
            <ul>                
              {pages.map((page) => (
                <li key={page} onClick={() => handleSelection(page)}>
                  {page}
                </li>
              ))} 
            </ul>
        </nav>
    </div>
  )
}

export default Nav
