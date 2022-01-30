import './App.scss';
import NavBar from './components/NavBar/NavBar';
import NavLinks from './components/NavLinks/NavLinks';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { useState } from 'react';

const App = () => {

  let [toggleModal, setToggleModal] = useState(false);

  return (
    <div className="App">
      {toggleModal && <Modal closeModal={setToggleModal}/>}
      <NavBar openModal={setToggleModal}/>
      <NavLinks />
      <img className='hero' src="/HunchHero.webp" alt="HUNCHERO" />
      <Footer />
    </div>
  );
}

export default App;
