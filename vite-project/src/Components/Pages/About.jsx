import React from 'react';
import '../Style/About.css';

const timelineData = [
  {
    id: 1,
    position: 'left',
    title: '👨‍💻 Sreedhar V',
    content: `I am currently pursuing a Bachelor of Engineering (B.E.) in Electronics and Communication Engineering (ECE) at Chennai Institute of Technology (2021–2025). I am passionate about becoming a software developer and aspire to create innovative solutions 🌍 that positively impact the world.`,
  },
  {
    id: 2,
    position: 'right',
    title: 'INTERN',
    content: `💼 As a Web Development Intern at Techno Hack, I gained hands-on experience in building dynamic and 
                 responsive web solutions 🌐. I worked extensively with HTML ✍️, CSS 🎨, and JavaScript ⚡ to create user-friendly interfaces and functionality.
                 Additionally, I utilized Git 🔧 for version control, ensuring seamless collaboration and code management 🤝. 
                 This experience enhanced my technical expertise 💡 and 
                 strengthened my ability to develop efficient and scalable web applications 🚀.`,
  },
  {
    id: 3,
    position: 'left',
    title: 'Hackathon & Competitions 🌟',
    content: `🚀 I actively participated in hackathons and competitions,
                  collaborating with my team to brainstorm innovative ideas and 
                  develop impactful solutions. 🧠💡 With a passion for fast learning,
                   I quickly grasped new technologies to bring our concepts to life.
                    🤝 The experience enhanced my skills in teamwork, problem-solving, and 
                    adapting to dynamic challenges in a time-sensitive environment.`,
  },
  {
    id: 4,
    position: 'right',
    title: 'Leadership & Volunteering',
    content: `🎓 Organized an Image Processing Workshop and technical events at college, showcasing team management and event coordination skills.
                🤝 Actively volunteered in various events, demonstrating teamwork and leadership.`,
  },
];

function About() {
  return (
    <section className='about'>
       <div className="timeline-container">
      {timelineData.map((item) => (
        <div
          key={item.id}
          className={`timeline-item ${item.position === 'left' ? 'left-timeline' : 'right-timeline'}`}
        >
          <div className="timeline-circle">
            <h1>{item.id}</h1>
          </div>
          <div className={`timeline-content ${item.position === 'left' ? 'left-content' : 'right-content'}`}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
   
  );
}

export default About;
