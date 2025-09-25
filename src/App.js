import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);   
    }, 3000);
  };

  const removebg = () => {
    document.body.classList.remove('bg-success','bg-danger','bg-warning','bg-secondary','bg-info','bg-dark','bg-light');
  };

  const togglemode = (cls) => {
    removebg();
    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#142b3d';
      showalert("Dark mode has been enabled", "success");
      // document.title='Dark mode enabled';
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
      // document.title='Light mode enabled';
    }
  };

  return (
    <Router>
      <Navbar title="textutils" about="about text" mode={mode} togglemode={togglemode} />
      <Alert Alert={alert} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/"
          element={<TextForm heading="Hi! Textutils- word counter | character counter | time to read word :" mode={mode} showalert={showalert} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
