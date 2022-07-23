import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`); //Whether Dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }


  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }


  }
  return (
    <>
    {/* <Navbar title = "TextUtils" aboutText="About us"/> */}
    {/* <Router> */}
    <Navbar title='textUtils' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>

    {/* </Routes> */}
    {/* <About /> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
