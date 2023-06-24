import "./App.css";
import About from "./components/About";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      showAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("dark mode has been enabled", "success");
      document.title = "textutils- dark mode enable";
      // setInterval(()=>{
      //   document.title='textutils is amazing'

      // },2000)
      // setInterval(()=>{
      //   document.title='install textutils now'

      // },1000)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "textutils- light mode enable";
    }
  };

  return (
    <>
    <Router>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> 
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<About />}></Route>
          </Routes>

        </div>
      </Router>
    </>
  )
}

export default App;
