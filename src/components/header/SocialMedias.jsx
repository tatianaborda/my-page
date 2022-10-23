import React from 'react'
import {BsLinkedin, BsGithub, BsYoutube, BsTwitter} from 'react-icons/bs'
import {FaDev} from 'react-icons/fa'

const SocialMedias = () => {
  return (
    <div className='social__medias'>
        <a href='https://www.linkedin.com/in/tatiana-borda/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/tatianaborda' target='_blank'><BsGithub/></a>
        <a href='https://www.youtube.com/c/AlienExplorer' target='_blank'><BsYoutube/></a>
        <a href='https://twitter.com/alienexplorerok' target='_blank'><BsTwitter/></a>
        <a href='https://dev.to/tatianaborda' target='_blank'><FaDev/></a>
    </div>
  )
}

export default SocialMedias