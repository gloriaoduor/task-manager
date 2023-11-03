
import './App.css';
import Tasklist from './components/Tasklist';
import Header from './components/Header';
import { useState } from 'react';
import AddTask from './components/AddTask';
import Login from './components/Login';


import SignUp from './components/SignUp';

function App() {

   // add task modal 
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
      setShowModal(true);
  };

  const closeModal = () => {
      setShowModal(false);
  };

  return (
  <div className="">
    <Header />
    <Tasklist openModal={openModal} />
    <AddTask showModal={showModal} closeModal={closeModal} />
  </div> 
    
  );
}

export default App;
