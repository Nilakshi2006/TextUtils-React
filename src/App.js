import './App.css';
// import About from './components/About';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {

  const [alert, setAlert] = useState(null);   
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
   setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'White';
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
<>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} />
<div className="container my-3">
  <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
  {/* <div className="About Conatiner my-3">
  <About/> */}
  {/* </div> */}
</div>
</>
  );
}

export default App;
