import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutArea from './components/AboutArea';

// let name = "Dipesh";

function App() {
  return (
    <>
      <Navbar tittle="TextUtils" aboutText="about" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
        {/* <AboutArea/> */}
      </div>
    </>
  );
}

export default App;
