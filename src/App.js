import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './components/Game';
import Alert from './components/Alert';

function App() {
  
  const [show, setShow] = useState(false);
  const [type, setType] = useState(0);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const showModal = (title, desc, type) => {
    setTitle(title);
    setDesc(desc);
    setType(type);
    setShow(true);
  }

  const onClose = () => {
    setTitle("");
    setDesc("");
    setType(0);
    setShow(false);
  }

  useEffect(() => {
    // showModal("THis is a title","this is a desc",0)
  },[])

  return (
    <div className="App">
      <Alert show={show} type={type} title={title} desc={desc} onClose={onClose}/>
      <div className='game-container'>
        <div className='info-container'></div>
        <div className='chess-container'>
          <GameBoard/>
        </div>
      </div>
    </div>
  );
}

export default App;
