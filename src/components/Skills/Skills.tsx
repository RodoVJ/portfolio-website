import { skills } from '../../data/portfolio';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title" data-marker="/02 skills">Stack</h2>
        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <span className="category-api">
                // {skillCategory.category.toLowerCase().replace(/[^a-z0-9]+/g, '.')}
              </span>
              <h3 className="category-title">{skillCategory.category}</h3>
              <div className="skill-items">
                {skillCategory.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 