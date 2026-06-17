import { contactInfo } from '../../data/portfolio';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: 'about' },
    { id: 'skills', label: 'skills' },
    { id: 'experience', label: 'experience' },
    { id: 'projects', label: 'projects' },
    { id: 'contact', label: 'contact' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-topbar">
          <span className="header-brand">{contactInfo.name.toLowerCase().replace(/\s+/g, '')}</span>
          <nav className="navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-button"
              >
                /{item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="header-content">
          <p className="header-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Available for new roles · {contactInfo.location}
          </p>
          <h1 className="name">
            I build software<br />
            that <em>scales</em>.
          </h1>
          <p className="title">
            {contactInfo.name} — Senior Full-Stack Developer with 4+ years shipping
            production software at Amazon, Chaser, and beyond.
          </p>
          <div className="header-meta">
            <span>ex-Amazon</span>
            <span className="header-meta-divider">·</span>
            <span>4+ years experience</span>
            <span className="header-meta-divider">·</span>
            <span>react · node · java · aws</span>
          </div>
          <div className="header-actions">
            <button className="cta-primary" onClick={() => scrollToSection('projects')}>
              View work →
            </button>
            <button className="cta-secondary" onClick={() => scrollToSection('contact')}>
              Say hi
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 