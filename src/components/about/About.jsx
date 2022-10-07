import React from 'react';
import './about.css';
import ME from '../../assets/me_about.png';
import { FaAward } from 'react-icons/fa';
import { GoBookmark } from 'react-icons/go';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About"/>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className="about__card">
              <GoBookmark className="about__icon" />
              <h5>Qualification</h5>
              <small>BS Computer Science</small>
            </article>
          </div>

          <p>
            Hello! I'm Bilal Ahmad Khan, a self-motivated and passionate professional SQA Engineer/Front-End Developer based in Islamabad, PK. I enjoy building things that live on the internet. The most important for me is to achieve quality outcomes and find effective solutions. I am a goal-oriented self-starter seeking new challenges. I have done certifications in Front-end Development, WordPress Development, Cypress, Scrum, SQL and SQA from LinkedIn Learning.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
