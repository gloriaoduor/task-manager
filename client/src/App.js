
import './App.css';
import Tasklist from './components/Tasklist';
import Header from './components/Header';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {

   // add task modal 
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const openModal = () => {
      setShowModal(true);
  };
  const openEditModal = () => {
    setShowEditModal(true);
};

  const closeModal = () => {
      setShowModal(false);
  };
  const closeEditModal = () => {
    setShowEditModal(false);
};

  return (
  <div className="">
    <Header />
    <Tasklist openModal={openModal} openEditModal= {openEditModal} />
    <AddTask showModal={showModal} closeModal={closeModal} showEditModal={showEditModal} closeEditModal={closeEditModal}/>
  </div> 
    
  );
}

export default App;
