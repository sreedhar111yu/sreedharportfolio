import React from "react";
import "../Style/Home.css";
import source from "../../Assets/source.gif";



function HomePage() {
  return (
    <div className="home-container">
      <div class="home-left">
    <h1>Hi there, <span>Sreedhar V</span></h1>
    <h2>Let me introduce <span>myself</span></h2>
    <p>I am passionate about building innovative applications and bringing ideas to life.</p>
    <div class="roles">
      <span>"Software Developer"</span> 
    </div>
  </div>
      <div className="home-right">
        <img src={source} alt="Profile GIF" className="profile-image" />
      </div>
    </div>
  );
}

export default HomePage;
