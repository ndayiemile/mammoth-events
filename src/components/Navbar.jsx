import React from 'react'

const Navbar = ({topNavRef}) => {
  return (
    <div ref={topNavRef} className='navbar'>
        <h1>Mammoth Events</h1>
        <ul>
            <li>Home</li>
            <li>Events</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar