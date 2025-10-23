import { contactInfo } from '../../data/portfolio';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-text">
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you're looking for a senior developer to join your team or 
              have a project you'd like to discuss, I'd love to hear from you.
            </p>
            <p>
              Feel free to reach out if you want to talk about technology, 
              collaboration opportunities, or just want to say hello!
            </p>
          </div>
          
          <div className="contact-methods">
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="contact-method"
            >
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>{contactInfo.email}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 