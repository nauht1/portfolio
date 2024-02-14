import './App.css';
import About from './components/about/About';
import Background from './components/background/Background';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';

function App() {
  return (
    <>
      <Background />
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;
