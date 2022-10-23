import React from 'react'
import TATIANABORDA from '../../assets/TATIANABORDA.pdf'

const CallToAction = () => {
  return (
    <div className='cta'>
        <button className='btn'><a href={TATIANABORDA} download>Download CV</a></button>
        <button className='btn btn-primary'><a href='#contact'>Let's talk</a></button>
    </div>
  )
}

export default CallToAction