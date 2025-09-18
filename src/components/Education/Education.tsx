import { education } from '../../data/portfolio';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-content">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-icon">
                🎓
              </div>
              <div className="education-details">
                <h3 className="institution">{edu.institution}</h3>
                <p className="degree">{edu.degree}</p>
                <span className="period">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 