import React from 'react'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import './projects.css'

const projectData = [
  {
    id: 1,
    img: img1,
    title: 'lalalla',
    github:'https://github.com/tatianaborda/piano',
    demo: 'https://www.youtube.com/'
  },
  {
    id: 2,
    img: img2,
    title: 'lalalla',
    github:'https://github.com/tatianaborda/piano',
    demo: 'https://www.youtube.com/'
  },
  {
    id: 3,
    img: img3,
    title: 'lalalla',
    github:'https://github.com/tatianaborda/piano',
    demo: 'https://www.youtube.com/'
  }
]

const Projects = () => {
  return (
    <section id="projects">
      <h2>My recent projects</h2>
       <div className="container projects__container">
        {
          projectData.map(({id, img, title, github, demo}) => {
            return (
              <article key={id} className="project">
              <h3>{title}</h3>
              <div className="project__img">
                <img src={img} alt={title}/>
              </div>
              <div className="project__cta">
              <a href={github} target="_blank" rel="noopener noreferrer">Github</a>
              <a href={demo} target="_blank" rel="noopener noreferrer">Live demo</a>
              </div>
              </article>
            )
          }
          )
        }
       </div>
    </section>
  )
}

export default Projects