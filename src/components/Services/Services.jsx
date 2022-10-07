import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Frontend Developement</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>React Development {"("}Front-end only{")"}</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Responsive Web Design</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>PSD to HTML/CSS/Sass</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Worpress theme styling {"("}Front-end only{")"}</p>
          </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Software Quality Assurance</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Product Evaluation</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Process Monitoring</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Maintaining Records and Reports</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Manual Testing</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Test Automation - Cypress</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>API Testing - Cypress</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Risk Management</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Educational programs</p>
          </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services