import React from 'react';
import "../Style/Activity.css";
import hack1 from "../../Assets/hack1.png";
import bk from "../../Assets/bk.gif";
import skill from "../../Assets/skill.png";
import dev from "../../Assets/dev.jpg";
import mongo from "../../Assets/mongodb.webp";
import cisco from "../../Assets/cisco.png"
import rpa from "../../Assets/rpa.gif";

function Activity() {
  const data = [
    {
      title: "TGC- Tomato Grand Challenge",
      description: "Shortlisted in the top 25 teams nationwide for the TGC (Tomato Grand Challenge), we developed an innovative information system integrating crop planning, market intelligence, and stakeholder interfaces using remote sensing, AI, and app-based platforms.",
      image: hack1, 
      link:"https://www.figma.com/design/gdOguLOUdQlV1Kzq2glxfm/TGC-(Copy)?node-id=0-1&m=dev&t=P0M1IYuQiBsOcu5a-1"
      
    },
    {
      title: "IMINDS ",
      description: "Shortlisted for the final round of the IMinds Hackathon at Chennai Institute of Technology, we developed a supply chain management solution eliminating middlemen between farmers and wholesalers",
      image: hack1, 
      link:"https://www.figma.com/design/gj1aWnPLputZ60yoSK394d/Untitled?node-id=0-1&m=dev&t=wtPegSKVQjx9My1X-1"
    },
    {
      title: "Zoho cliqtrix-2025",
      description: "The Wikipedia Extension for Zoho Cliq allows users to quickly access Wikipedia content directly within their Cliq workspace using simple slash commands. This extension is designed to streamline information retrieval and sharing in real-time.",
      image: hack1, 
      link:"https://github.com/sreedhar111yu/wikipedia_zoho"
    },
    {
      title: "SUSTAINATHON 2024",
      description: " Sustainability Hackathon by Indian Oil Corporation Ltd",
      image: hack1, 
      link:"https://drive.google.com/file/d/1LGB9MeNxi7tmR_Vx2ukdzRtheBId453y/view?usp=sharing"
    },
    {
      title: "DI Design Impact Movement 2024",
      description: "Hackthon for sustainability development.",
      image: hack1, 
      link:"https://drive.google.com/file/d/165NcfdfP8AedBzeBD0KnslEutfqsZMQp/view?usp=sharing"
    },

  ];
  // PROJECT
  const projectdata=[
    {
      title: "Wikipedia Extension for Zoho Cliq",
      description: "The Wikipedia Extension for Zoho Cliq allows users to quickly access Wikipedia content directly within their Cliq workspace using simple slash commands. This extension is designed to streamline information retrieval and sharing in real-time.",
      image: dev, 
      link:"https://github.com/sreedhar111yu/wikipedia_zoho"
      
    },
    {
      title: "Cake Shop ",
      description: "wesite for cake shop. TECH-STACk: React.js, Tailwindcss, Express.js, MongoDB,Google OAuth3, JWT",
      image: dev,
      link:"https://github.com/sreedhar111yu/mern-auth" 
    },
    {
      title: "Hotel Management",
      description: "C++, OPPS",
      image: dev, 
      link:"https://github.com/sreedhar111yu/hotel-man-cpp"
    },
    {
      title: "Rockstar game website",
      description: "Landing page website in HTML and Tailwind css, containerized in docker",
      image: dev, 
      link:"https://github.com/sreedhar111yu/Rockstar"
    },
    {
      title: "Library Managment",
      description: "React.js backend REST api integration",
      image: dev, 
      link:"https://github.com/sreedhar111yu/Library-man"
    },
    {
      title: "CRM",
      description: "Frontend:React.js",
      image: dev, 
      link:"https://github.com/sreedhar111yu/CRM"
    },
    {
      title: "FY-25-Project",
      description: "Under Development !",
      image: dev, 
      link:"https://github.com/Thanush19/FY-25-Project"
    },
    {
      title: "Small Office-Network",
      description: "Cisco packet tracer connection between Switch and PC, VLAN,VTP,Switchport secutity, Router interface",
      image: dev, 
      link:"https://github.com/sreedhar111yu/networking"
    },


  ];
  
  // CERTIFICATION
  const Certificationdata=[
    {
      title: "Connecting to a MongoDB Database",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      image: mongo,
      link: "https://drive.google.com/file/d/1saDSQ5EP6dmgPCh3Mf6KX_GXqYe3LJ40/view?usp=sharing"
    },
    {
      title: "Introduction to MongoDB",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      image: mongo, 
      link:"https://drive.google.com/file/d/1O_RMfUP612DPh_55LDCMUeOecdz23Cpl/view?usp=sharing"

    },
    {
      title: "Getting Started with MongoDB Atlas",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      image: mongo, 
      link:"https://drive.google.com/file/d/13kFtmnYHWsl6CgcaEtpw3umo05vOGJsm/view?usp=sharing"

    },
    {
      title: "MongoDB Data Modeling Intro",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      image: mongo, 
      link:"https://drive.google.com/file/d/1TC0YQQy0-44YQD5iM3j3Yud6AnCKVjCd/view?usp=sharing"

    },
    {
      title: "MongoDB Atlas Search",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      image: mongo, 
      link:"https://drive.google.com/file/d/1OMnIg8HQ21tESAUDV1BuAYPCvCHhJ1LA/view?usp=sharing"

    },
    {
      title: "MongoDB Indexes",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      image: mongo, 
      link:"https://drive.google.com/file/d/1AIPkuXAfVMUi7puSoO0TTUQoW-XCe98J/view?usp=sharing"

    },
    {
      title: "MongoDB CRUD Operations: Insert and Find Documents",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      image: mongo, 
      link:"https://drive.google.com/file/d/1YubQ_VPW0PbomT8kPQWu0WMSVocjooPx/view?usp=sharing"

    },
    {
      title: "MongoDB CRUD Operations: Modifying Query Results",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      image: mongo, 
      link:"https://drive.google.com/file/d/1YQNlDrld6_5zuaszzlAOuWI_sgs3eiT9/view?usp=sharing"

    },
    {
      title: "MongoDB CRUD Operations: Replace and Delete Documents",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      image: mongo, 
      link:"https://drive.google.com/file/d/1M9Xmw48XiZ8HndSpAn5uILM9jnwH9ZPP/view?usp=sharing"

    },
    {
      title: "MongoDB Aggregation",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      image: mongo, 
      link:"https://drive.google.com/file/d/1fPvtesZNH_GH41x9dNPH8xm-i6HVSdIi/view?usp=sharing"

    },
    {
      title: "MongoDB Transactions",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      image: mongo, 
      link:"https://drive.google.com/file/d/1DiqQZ0vegV7JUOaOCoglQQc6h3Cx3Wt9/view?usp=sharing"

    },
    {
      title: "MongoDB and the Document Model",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      image: mongo, 
      link:"https://drive.google.com/file/d/1MuUZQZtZTst1gP_Vfzge2k00Bh420NUC/view?usp=sharing"

    },
    {
      title: "MongoDB and the Document Model",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      image: mongo, 
      link:"https://drive.google.com/file/d/1MuUZQZtZTst1gP_Vfzge2k00Bh420NUC/view?usp=sharing"

    },

    {
      title: "Introduction to Cybersecurity",
      description: "Cisco Networking Academy",
      image: cisco, 
      link:"https://drive.google.com/file/d/17SN_FF4mZbP50RGvj9OfgdTlmluKpDEo/view?usp=sharing"


    },
    {
      title: "CCNA 1: Introduction to Networks",
      description: "Cisco Networking Academy",
      image: cisco, 
      link:"https://drive.google.com/file/d/10Hf6oDr5YccOEbfh9BfT7zW1k8lNXn9g/view?usp=sharing"


    }, {
      title: "CCNA 2: Switching, Routing, and Wireless Essentials ",
      description: "Cisco Networking Academy",
      image: cisco, 
      link:"https://drive.google.com/file/d/122S8cGsYkf2cI6uc8iriTd_flAacYpR5/view?usp=sharing"


    }, {
      title: "CCNA 3: Enterprise Networking, Security, and Automation",
      description: "Cisco Networking Academy",
      image: cisco, 
      link:"https://drive.google.com/file/d/1IObpEHGVCLVChkVDw0KGCqWzhZg4vUXo/view?usp=sharing"


    },
    {
      title: "RPA: UIPATH academy",
      description: "Build Your First Automation with StudioX",
      image: rpa, 
      link:"https://drive.google.com/file/d/1cHTfzbs5h_mdy5nZnb9y5CPIlWDpWtsb/view?usp=sharing"


    },
    {
      title: "RPA: UIPATH",
      description: " File and Folder Automation in StudioX",
      image: rpa, 
      link:"https://drive.google.com/file/d/1IFmE6KlAaCQ9cAYJjAVYUq-lcnezRGoy/view?usp=sharing"


    },
    {
      title: "RPA: UIPATH",
      description: " User Interface Automation in StudioX",
      image: rpa, 
      link:"https://drive.google.com/file/d/1kBEZdGvV_Y7J9NZWH8W-p6xgCggMPCaU/view?usp=sharing"


    },
    {
      title: "RPA: UIPATH",
      description: " Introduction to RPA and Automation",
      image: rpa, 
      link:"https://drive.google.com/file/d/1GpZ2poBdIsYPy3ELKZE6NskMvnVIGSxv/view?usp=sharing"


    },
    {
      title: "RPA: UIPATH",
      description: "RPA Starter",
      image: rpa, 
      link:"https://drive.google.com/file/d/1O3Buu4S1zyCCAzUeuIOe2hL-sgL_J5JI/view?usp=sharing"


    },
    {
      title: "RPA: UIPATH",
      description: "RPA Citizen Developer Foundation",
      image: rpa, 
      link:"https://drive.google.com/file/d/1cyyllQvxVHjPxoaEgP5yH59wtap0dGM9/view?usp=sharing"


    },
    {
      title: "RPA: UIPATH",
      description: "Get Started with the Citizen Developer Journey",
      image: rpa, 
      link:"https://drive.google.com/file/d/1CsdaQk2gTK_THcxj2vigK6ctMvBgnhxt/view?usp=sharing"


    },
    {
      title: "RPA: UIPATH",
      description: "Microsoft Excel Automation in StudioX",
      image: rpa, 
      link:"https://drive.google.com/file/d/1wkAgScYsTs2GGqPdHnvKggiajAMSyqrK/view?usp=sharing"


    },
    {
      title: "RPA: UIPATH",
      description: "Email Automation in StudioX",
      image: rpa, 
      link:"https://drive.google.com/file/d/1y_wW9e6OjCoGFnMC55n9sx4lwugmfW3z/view?usp=sharing"


    },
    {
      title: "RPA: UIPATH",
      description: "How to Handle Errors in StudioX",
      image: rpa, 
      link:"https://drive.google.com/file/d/1UcxJooGO4kyeuPBI50_8TIMz5OL93YxQ/view?usp=sharing"


    },
    {
      title: "RPA: UIPATH",
      description: "Decisions, Iterations,and Scenarios in StudioX",
      image: rpa, 
      link:"https://drive.google.com/file/d/1meTmF0DFFqMdCvGteDrNMvUphYsoAt_n/view?usp=sharing"


    },
    
  ]
  

  return (
    <>
    <section>
      <p className='title'>SKILLS</p>
      <div className="skill-container">
            <div class="skill-left">
              <img src={skill} alt="" />
        
          
        </div>
            <div className="skill-right">
              <img src={bk} alt="Profile GIF" className="profile-image" />
            </div>
          </div>
    </section>
      <section> <p className='title'>EVENTS</p>
      <div className='event-container'>
      <div className="card-grid">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="card-button">View</button>
            </a>
              </div>
            </div>
          ))}
        </div>

      </div>
        
        
      </section>
      <section> 
        <p className='title'>PROJECT</p>
        <div className='project-container'>
      <div className="card-grid">
          {projectdata.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="card-button">View</button>
            </a>
              </div>
            </div>
          ))}
        </div>

      </div>
        </section>
        
        <section> 
  <p className='title'>CERTIFICATION</p>
  <div className='cet-container'>
    <div className="card-grid">
      {Certificationdata.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} alt={item.title} className="card-image" />
          <div className="card-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="card-button">View</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </>
  );
}

export default Activity;
