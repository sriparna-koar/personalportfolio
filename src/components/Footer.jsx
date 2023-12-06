import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdLink } from 'react-icons/io';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon github" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon linkedin" />
          </a>
          <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
            <IoMdLink className="icon website" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
