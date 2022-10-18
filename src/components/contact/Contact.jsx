import React, { useRef } from 'react';
import './contact.css';
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { ImWhatsapp } from 'react-icons/im';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ezxz9oi',
        'template_niw6knl',
        form.current,
        'x4SWtu69y5ik2huws'
      )
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>bilalahmad.khan@hotmail.com</h5>
            <a
              href="mailto:bilalahmad.khan@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>@bilalahmadkhan1</h5>
            <a
              href="https://www.linkedin.com/in/bilalahmadkhan1/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+92-333-5522939</h5>
            <a
              href="https://api.whatsapp.com/send?phone=923335522939"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
