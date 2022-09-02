import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Planes from './components/Planes/Planes';
import Programas from './components/Programas/Programas';
import Testimonios from './components/Testimonios/Testimonios';
import arrowUpIcon from './images/arrow_up.svg';


function App() {
  return (
    <div className="App">
      <Hero />
      <Programas />
      <Planes />
      <Testimonios />
      <Footer />
      <a href='#Inicio'>
        <button className='backToTop'>
          <img src={arrowUpIcon} alt='back to top' />
        </button>
      </a>

    </div>
  );
}

export default App;
