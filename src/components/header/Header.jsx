import React from 'react'
import './header.css'
import SocialMedias from './SocialMedias.jsx'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <div className='me'>       
         <h3>Hello I'm</h3>
         <br/>
        <h1 className='name'>Tatiana Borda</h1>
        <br/>
        <h2 className='text-light'>Fullstack Developer</h2>
        </div>
        <SocialMedias/>
        <a href='#contact' className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header