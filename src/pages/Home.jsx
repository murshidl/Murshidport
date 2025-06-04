import './Home.css';
import murshidImg from '../assets/murshidImg.png';
import { FaInstagram, FaLinkedin, FaGithub, FaDatabase } from 'react-icons/fa';
import { DiPython } from 'react-icons/di';
import mysqlImg from '../assets/mysql.png';
import figmaImg from '../assets/figma.683x1024.png';
import pythonImg from '../assets/python.png';
import jsImg from '../assets/js (1).png';
import { internships } from '../components/Exp_card';
import { projects } from '../components/Projects';
import Footer from '../components/Footer';
import expressImg from '../assets/Express.png';
import nodeImg from '../assets/Node.png';
import reactImg from '../assets/ReactIMg.png';
import Mongo from '../assets/mongo.png';
import vapt from '../assets/vapt.png';






export const PythonIcon = () => {
  return (
    <div>
      <DiPython size={50} color="#306998" />
    </div>
  );
};


export const Home = () => {
  return (
    <div className="Main-container">
      <div id='Home' className="home-container">

        <div className="profile-card">
          <img id="my-image" src={murshidImg} alt="Profile" />
          <h2>Murshid Ahsan ALI</h2>
          <p className="subtitle">Tech Innovator | Web Developer</p>

          <div className="card-footer">
            <p>Follow On:</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/iamurshid?igsh=MXZxc2JuNGNoMGFiZg==" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/murshid-ahsan-ali-8b555221b" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/murshidl" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="container-content">
          <h1>Hello <br /> Everyone</h1>
          <h3>Here’s Who I am & What I do</h3>
          <div className="resume" onClick={() => window.open("https://drive.google.com/drive/folders/1GgodtWmsw865aJySX5UZbe5rCU0m3mkW?usp=sharing", "_blank")} >Resume</div>
          <p>
            I’m Murshid, an IT professional, web developer, and cybersecurity enthusiast with expertise in web security,
            VAPT, and digital forensics. I co-founded Grabbit, offering NFC solutions, WhatsApp chatbots, digital business
            cards, and web development. Passionate about AI-driven surveillance systems and ethical hacking, I strive to
            bridge technology and security to create impactful digital solutions. Let’s connect and build something great!
          </p>
        </div>



      </div>

      <section id='skills' className="skills-section">
        <h2>💻 My Skills</h2>
        <div className="skills-grid">
          {[
            { img: pythonImg, alt: "Python Logo", name: "Python" },
            { img: mysqlImg, alt: "MySQL Logo", name: "MySQL" },
            { img: jsImg, alt: "JavaScript Logo", name: "JavaScript" },
            { img: figmaImg, alt: "Figma Logo", name: "Figma" },
            { img: Mongo, alt: "MongoDB Logo", name: "MongoDB" },
            { img: reactImg, alt: "React Logo", name: "React" },
            { img: nodeImg, alt: "Node.js Logo", name: "Node.js" },
            { img: expressImg, alt: "Express.js Logo", name: "Express.js" },
            { img: vapt, alt: "VAPT Logo", name: "VAPT" },
          ].map(({ img, alt, name }) => (
            <div key={name} className="skill-item">
              <img src={img} alt={alt} />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </section>


      <section id='experience' className="exp-card">
        <h2>💼  Experience</h2>
        <div className="exp-list">
          {internships.map((internship, index) => (
            <div className="exp-item" key={index}>
              <h3>{internship.title}</h3>
              <p><strong>{internship.company}</strong></p>
              <p className="exp-period">{internship.period}</p>
              <p>{internship.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id='projects' className="projects-section">
        <h2>My-Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <img src={project.image} alt={project.panme} />
              <h3>{project.panme}</h3>
              <p><strong>Date:</strong> {project.Date}</p>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.Tech_Stack}</p>
            </div>
          ))}
        </div>
      </section>
      < Footer />


    </div>


  );
};


