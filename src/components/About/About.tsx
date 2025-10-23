import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Senior Full-Stack Developer with over 4 years of experience 
              building scalable web applications and leading technical initiatives. My journey 
              spans from research at Brock University to developing enterprise solutions at Amazon 
              and now driving product innovation at Chaser.
            </p>
            <p>
              I specialize in modern web technologies including React, Node.js, Java, and cloud 
              platforms like AWS. I'm particularly passionate about performance optimization, 
              user experience, and building systems that scale. My unique background in both 
              Computer Science and Biology gives me a unique perspective on problem-solving 
              and system design.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, golfing ⛳, and practicing brazilian jiu-jitsu 🥷.
              I believe in writing clean, maintainable code and fostering collaborative team environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 