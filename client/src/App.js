
import './App.css';
import Tasklist from './components/Tasklist';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  
  return (
    <div>
      <div className="">
        <Header />
        <Tasklist />
      </div>
    </div>
  );
}

export default App;
