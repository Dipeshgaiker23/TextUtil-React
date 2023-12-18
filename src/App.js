import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import AboutArea from './components/AboutArea';
import { useState } from 'react';

// let name = "Dipesh";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0e2236';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar tittle="TextUtils" mode={mode} aboutText="about" toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode}/>
        {/* <AboutArea/> */}
      </div>
    </>
  );
}

export default App;
