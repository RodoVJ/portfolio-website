import './App.css';
import Header from './components/Header/Header';
import Ticker from './components/Ticker/Ticker';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MouseReveal from './components/MouseReveal/MouseReveal';

function App() {
  return (
    <MouseReveal>
      <div className="App">
        <Header />
        <Ticker />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <ScrollToTop />
      </div>
    </MouseReveal>
  );
}

export default App;
