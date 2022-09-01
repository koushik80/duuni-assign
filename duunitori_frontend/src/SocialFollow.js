import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faTwitter, faLinkedin, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import './App.css';

const SocialFollow = () => {
  return (
    <div className="social-container">
      <h3>Löydät meidät myös täältä:</h3>
      <div className="social-icons">
        <a href="https://www.youtube.com/user/duunitori" className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fduunitori%2F" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com/duunitori" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.linkedin.com/company/duunitori.fi" className="linkedin social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.instagram.com/accounts/login/" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.pinterest.com/duunitori/" className="pinterest social">
          <FontAwesomeIcon icon={faPinterest} size="2x" />
        </a>
      </div>
       <div className="power-text"><p>Developed by koushik@devHuß</p>
      </div>
    </div>
  );
}

export default SocialFollow;