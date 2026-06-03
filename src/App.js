import './App.css';
import About from './components/About';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


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
      document.title = 'TextUtils - Dark Mode';

//         setTimeout(() => {
//         document.title = 'TextUtils is Amazing';
//       }, 2000);
// setTimeout(() => {
//         document.title = 'Install TextUtils Now';
//       }, 1500);

// this timeout is just for understanding purpose, it is not a good practice to change title like this, it can be irritating for user


    } else {
      setMode('light');
      document.body.style.backgroundColor = 'White';
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils - Light Mode';

    }
  };
  return (
<>
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} />
<div className="container my-3">
<Routes>
  <Route path="/about" element={<About />} />
  <Route path="/" element={
    <TextForm 
      heading="Enter the text to analyze" 
      mode={mode} 
      showAlert={showAlert}
    />
  } />
</Routes>
</div>
  </Router>
</>
  );
}

export default App;
