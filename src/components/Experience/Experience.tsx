import { experiences } from '../../data/portfolio';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-date">
                {exp.period}
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="job-title">{exp.title}</h3>
                  <div className="company-location">
                    <span className="company">{exp.company}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                <ul className="achievements">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 