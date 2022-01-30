import './App.scss';
import NavBar from './components/NavBar/NavBar';
import NavLinks from './components/NavLinks/NavLinks';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { useState, useEffect } from 'react';

const App = () => {

  //toggle modal visibility
  let [toggleModal, setToggleModal] = useState(false);
  //set brand color globally & persist state on reload
  let [color, setColor] = useState(window.localStorage.getItem('color') ? window.localStorage.getItem('color')  : 'rgb(0,168,38)');

  useEffect(() => {
    window.localStorage.setItem('color', color);
  }, [color]);

  return (
    <div className="App">
      {toggleModal && <Modal closeModal={setToggleModal} color={color}/>}
      <NavBar openModal={setToggleModal} color={color}/>
      <NavLinks setColor={setColor} color={color}/>
      <img className='hero' src="/HunchHero.webp" alt="HUNCHERO" />
      <Footer color={color} />
    </div>
  );
}

export default App;
