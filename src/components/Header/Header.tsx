import { contactInfo } from '../../data/portfolio';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="name-section">
            <h1 className="name">{contactInfo.name}</h1>
            <p className="title">Senior Full-Stack Developer</p>
          </div>
          
          <nav className="navigation">
            <button onClick={() => scrollToSection('about')} className="nav-button">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="nav-button">
              Experience
            </button>
            <button onClick={() => scrollToSection('skills')} className="nav-button">
              Skills
            </button>
            <button onClick={() => scrollToSection('education')} className="nav-button">
              Education
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-button">
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 