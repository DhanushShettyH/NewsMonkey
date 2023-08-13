import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

// rafce

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert]=useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      msg:message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#121212';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");


    }
  }
  return (
    <>
      <Navbar title="Navigation" about="About Text" mode={mode} toggleMode={togglemode} />
      <Alert alert={alert} />








      <Routes>
        {/* when ever textform need it can call showalert func to display alert */}
        <Route path="/" exact element={<TextForm name="Type your Text" mode={mode} showalert={showAlert} />}>
        </Route>

        <Route path="/about" exact element={<About />}>
        </Route>
      </Routes>

    </>
  );
}

export default App;
