import './App.css';
// import About from './components/About';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'White';
    }
  };
  return (
<>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
  <TextForm heading="Enter the text to analyze" mode={mode}/>
  {/* <div className="About Conatiner my-3">
  <About/> */}
  {/* </div> */}
</div>
</>
  );
}

export default App;
