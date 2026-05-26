import './App.css';
import About from './components/About';
import Navbar from './components/navbar';
// import TextForm from './components/TextForm';
function App() {
  return (
<>
<Navbar title="TextUtils"/>
{/* <div className="container my -3">
  <TextForm heading="Enter the text to analyze"/> */}
  <div className="About Conatiner my-3">
  <About/>
  </div>
{/* </div> */}
</>
  );
}

export default App;
