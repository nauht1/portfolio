import './App.css';
import Background from './components/background/Background';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Background />
      <Header />
      <main className='main'>
        <Home />
      </main>
    </>
  )
}

export default App;
