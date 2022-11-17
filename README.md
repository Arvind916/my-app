# my-app
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Form from './components/Form';
// import About from './components/About';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   BrowserRouter
// } from "react-router-dom";




function App() { 
  const[mode,setmode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  function toggleMode(){
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor="rgb(17 14 38)"
      showAlert("Dark Mode is Enabled", "Success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light Mode is Enabled", "Success")
    }
  }
  function toggleMode1(){
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor="rgb(36 118 19)"
      showAlert("Green Mode is Enabled", "Success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light Mode is Enabled", "Success")
    }
  }
  return (
    <>
    {/* <BrowserRouter>
      <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1}/>
        <Alert alert={alert}/>
        <div className="container my-3"  >
        </div>
        <div className='container '>
          {/* <Switch>
                <Route exact path="/about">
                  <About />
                </Route> */}
                {/* <Route exact path="/"> */}
                  <Form heading="Enter Text here" mode={mode} showAlert={showAlert} />
                {/* </Route> */}
          {/* </Switch> */}

        </div>
      {/* </Router>
    </BrowserRouter> */}
    </>
  );
}

export default App;
