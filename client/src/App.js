
import './App.css';
import Tasklist from './components/Tasklist';
import Header from './components/Header';
import { useState } from 'react';
import AddTask from './components/AddTask';
import SideBar from './components/Sidebar';
import EditTask from './components/EditTask';

function App({item}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

   // modal states
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

    <div className="d-flex" id="wrapper">

      {/* <!-- Sidebar--> */}
      <SideBar/>

      {/* <!-- Page content wrapper--> */}
      <div className="main" id="page-content-wrapper">
        
        {/* <!-- Page content--> */}
        <div className="container-fluid content-container">
          <Tasklist openModal={openModal} openEditModal= {openEditModal} />
          <AddTask showModal={showModal} closeModal={closeModal} />
          <EditTask showEditModal={showEditModal} closeEditModal={closeEditModal} item={item}/>
        </div>
      </div>
    </div>
  
    
  );
}

export default App;
