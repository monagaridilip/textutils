// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  function colorMode(cls) {
    // console.log(cls)
    classRemove();
    document.body.classList.add('bg-' + cls);
  }
  function toggleMode() {
    classRemove();
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark Mode is Enabled", "success")

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode is Enabled", "success")
    }

  }

  const classRemove = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-white');
    document.body.classList.remove('bg-black');
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" heading1="Home"  mode={mode} toggleMode={toggleMode} colorMode={colorMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForms heading="Text-utils- Word counter | Avg reading time | UpperCase | LowerCase" mode={mode} showAlert={showAlert}/>
        {/* <About mode={mode} /> */}
        </div>
      
    </>
  );
}

export default App;
