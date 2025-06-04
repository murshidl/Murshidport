import React, { useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from 'emailjs-com';
import './Footer.css';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3kd6qiu', 'template_222xse7', form.current, 'gAoz7XoZ6ivEoHQHk')
      .then((result) => {
        console.log('Success:', result.text);
        alert('Message sent successfully!');
        form.current.reset(); 
      }, (error) => {
        console.error('Error:', error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <footer id='contact'  className="footer-container">
      <div className="footer-contact">
        <h2>📬 Contact Me</h2>
        <p><FaPhoneAlt /> +91 9019764090</p>
        <p><FaEnvelope /> murshidali51@gmail.com</p>
        <p><FaMapMarkerAlt /> Mangalore, India</p>
        <div className="footer-socials">
          <a href="https://github.com/murshidl" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-form">
        <h3>Send a Message</h3>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Murshid Ahsan Ali | Built with ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
