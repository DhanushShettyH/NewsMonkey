import "./App.css";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alert from "./Components/Alert";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
import Dummy from "./Components/Dummy";

// rafce

function App() {
  let articlesize = 12;
  const apikey ="0d89b3b4124441f8bcf251237d7749f6";

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [state, setState] = useState({ progress: 0 })
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
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

  const setProgress = async (progress) => {
    setState({ progress: progress });
  }

  return (
    <>

      <LoadingBar
        height={3}
        color='#f11946'
        progress={state.progress}
        onLoaderFinished={() => setProgress(state.progress)}
      />
      <Navbar title="Navigation" about="About Text" mode={mode} toggleMode={togglemode} />
      <Alert alert={alert} />
      <Dummy  setProgress={setProgress} key="general" mode={mode} articleSize={articlesize} apiKey={apikey} country="in" category="general" />







      <Routes>
        {/* when ever textform need it can call showalert func to display alert */}
        {/* <Route path="/" exact element={<TextForm name="Type your Text" mode={mode} showalert={showAlert} />}>
        </Route>

        <Route path="/about" exact element={<About mode={mode} />}>
        </Route> */}


        {/* when you route one link to other react not remount component to remount same component with updated props use unique key */}

        {/* <Route path="/" exact element={<News setProgress={setProgress} key="general" mode={mode} articleSize={articlesize} apiKey={apikey} country="in" category="general" />}>
        </Route> */}

        <Route path="/business" exact element={<News setProgress={setProgress} key="business" mode={mode} articleSize={articlesize} apiKey={apikey} country="in" category="business" />}>
        </Route>
        <Route path="/entertainment" exact element={<News setProgress={setProgress} key="entertainment" mode={mode} articleSize={articlesize} apiKey={apikey} country="in" category="entertainment" />}>
        </Route>
        <Route path="/health" exact element={<News setProgress={setProgress} key="health" mode={mode} articleSize={articlesize} apiKey={apikey} country="in" category="health" />}>
        </Route>
        <Route path="/science" exact element={<News setProgress={setProgress} key="science" mode={mode} articleSize={articlesize} apiKey={apikey} country="in" category="science" />}>
        </Route>
        <Route path="/sports" exact element={<News setProgress={setProgress} key="sports" mode={mode} articleSize={articlesize} apiKey={apikey} country="in" category="sports" />}>
        </Route>
        <Route path="/technology" exact element={<News setProgress={setProgress} key="technology" mode={mode} articleSize={articlesize} apiKey={apikey} country="in" category="technology" />}>
        </Route>
      </Routes>

    </>
  );
}

export default App;
