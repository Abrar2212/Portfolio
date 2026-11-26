import { ThemeProvider } from './context/ThemeContext';
import ScrollBackground from './components/ScrollBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <ScrollBackground />
        <Header />
        <main>
          <Hero />
          <About />
          <Tools />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
