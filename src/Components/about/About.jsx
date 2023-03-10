import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src="ME" alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__' />
                            <h5>Experience</h5>
                            <small>2+ years Working</small>
                        </article>
                        <article className='about__card'>
                            <FaAward className='about__' />
                            <h5>Experience</h5>
                            <small>2+ years Working</small>
                        </article>
                        <article className='about__card'>
                            <FaAward className='about__' />
                            <h5>Experience</h5>
                            <small>2+ years Working</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About