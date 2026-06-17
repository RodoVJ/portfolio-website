import './App.css';
import Header from './components/Header/Header';
import Ticker from './components/Ticker/Ticker';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import MouseReveal from './components/MouseReveal/MouseReveal';
import DeployPipeline from './components/DeployPipeline/DeployPipeline';

function App() {
  return (
    <>
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
        </div>
      </MouseReveal>
      <DeployPipeline />
    </>
  );
}

export default App;
