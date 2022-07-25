import React from 'react'
import "./nav.css"

export default function Nav({color}) {
  return (
    <nav style={{ background:  `linear-gradient(220.55deg, ${color[1]} 0%, ${color[0]} 100%)` }} className='custom-nav'>
        <h2>{color}</h2>
    </nav>
  )
}
