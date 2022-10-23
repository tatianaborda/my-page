import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsYoutube, BsTwitter} from 'react-icons/bs'
import {FaDev} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <h2 className='footer_title'>Tatiana Borda</h2>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/tatiana-borda/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/tatianaborda' target='_blank'><BsGithub/></a>
        <a href='https://www.youtube.com/c/AlienExplorer' target='_blank'><BsYoutube/></a>
        <a href='https://twitter.com/alienexplorerok' target='_blank'><BsTwitter/></a>
        <a href='https://dev.to/tatianaborda' target='_blank'><FaDev/></a>
      </div>
    </footer>
  )
}

export default Footer