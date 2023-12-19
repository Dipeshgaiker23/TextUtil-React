import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AlertComp from './components/AlertComp';
import AboutArea from './components/AboutArea';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

// let name = "Dipesh";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0e2236';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>


      <BrowserRouter>
        <Navbar tittle="TextUtils" mode={mode} aboutText="about" toggleMode={toggleMode} />
        <AlertComp alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<AboutArea />}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}>
            </Route>
          </Routes>
          {/* <AboutArea/> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
