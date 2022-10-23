import React from 'react'
import './about.css'
import me from '../../assets/me.png'
import {BsLightbulbFill} from 'react-icons/bs'
import {RiUserHeartLine} from 'react-icons/ri'
import {BiNetworkChart} from 'react-icons/bi'
import CallToAction from './CallToAction.jsx'

const About = () => {
  return (
    <section id="about">
      <h2>About me</h2>
       <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="me"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsLightbulbFill className="about__icon"/>
              <h3>Content Creator</h3>
              <small>I have a youtube channel and I write technical articles</small>
            </article>
            <article className="about__card">
              <BiNetworkChart className="about__icon"/>
              <h3>Web3 builder</h3>
              <small>I'm very into Web3 ecosystem, building<br/> and creating</small>
            </article>
            <article className="about__card">
              <RiUserHeartLine className="about__icon"/>
              <h3>Communicator</h3>
              <small>I'm a public speaker<br/>and also I like to teach</small>
            </article>
          </div>
          <p>I am fullstack developer who specializes in JavaScript. I have industry experience building complete web applications working with Java and React. I also have experience developing dApps with Solidity. I'm a Web3 builder looking for new challenges👽</p>
            <CallToAction/>
        </div>
       </div>
    </section>
  )
}

export default About