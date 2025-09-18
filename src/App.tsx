import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
