import React from 'react'
import './Header.scss'

const Header = () => {
  return (
   <>
    <header className="header">
        <div className="container">
            <h3>Digital Agency</h3>

            <div className="menu">
                <p>home</p>
                <p>about</p>
                <p>testimonials</p>
                <p>contact</p>
            </div>
        </div>
    </header>
   </>
  )
}

export default Header
