import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { ImTwitter } from 'react-icons/im';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Bilal Ahmad Khan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#tcontact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/bilalahmadkhan1/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/bilalkhan13" target="_blank">
          <FaGithub />
        </a>
        <a href="https://twitter.com/_bilalahmadkhan" target="_blank">
          <ImTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>Copyright &copy; {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};

export default Footer;
