import React from 'react'
import "./Style/Footer.css";
import mail from "../Assets/mail.webp"
import linkedin from "../Assets/in.webp";
import git from "../Assets/Github.png";
import leetcode from "../Assets/leetcode.webp"
import hacker from "../Assets/hacker.png";
import youtube from "../Assets/youtube.webp";
import gfg from "../Assets/gfg.png";

function Footer() {
  return (
   <>
  <section>
  <p className="title"></p>
  <div className="connection">
    <p className="connection-text">Stay connected:</p>
    <div className="icon-container">
      <a href="mailto:sreedharv36@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src={mail} alt="Email" className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/sreedharvs/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" className="icon" />
      </a>
      <a href="https://github.com/sreedhar111yu" target="_blank" rel="noopener noreferrer">
        <img src={git} alt="GitHub" className="icon" />
      </a>
      <a href="https://leetcode.com/u/sreedharv36/" target="_blank" rel="noopener noreferrer">
        <img src={leetcode} alt="LeetCode" className="icon" />
      </a>
      <a href="https://www.hackerrank.com/profile/sreedharv_ece201" target="_blank" rel="noopener noreferrer">
        <img src={hacker} alt="HackerRank" className="icon" />
      </a>
      <a href="https://www.youtube.com/@sreedharv5263" target="_blank" rel="noopener noreferrer">
        <img src={youtube} alt="YouTube" className="icon" />
      </a>
      <a href="https://www.geeksforgeeks.org/user/sreedharvcrft/" target="_blank" rel="noopener noreferrer">
        <img src={gfg} alt="GeeksforGeeks" className="icon" />
      </a>
    </div>
  </div>
</section>
<footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} @sreedhar</p>
        <div className="footer-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="mailto:sreedharv36@gmail.com">Contact : sreedharv36@gmail.com</a>
          
        </div>
      </div>
    </footer>

   </>
  )
}

export default Footer