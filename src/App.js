import './App.css';
// import About from './comp/About';
import Alert from './comp/Alert';
import Form from './comp/Form';
import Navbar from './comp/Navbar';
import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  const[mode,setmode]=useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
 
  const toggle=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#333333'
      document.title='Textutils-Dark Mode'
      //showAlert("Dark mode enabled","success")
    }else{
      setmode('light')
      document.body.style.backgroundColor='white'
      //showAlert("Light mode enabled","success")
      document.title='Textutils-Light Mode'



    }
  }
 
  return (
  <>
{/* <BrowserRouter> */}
  <Navbar title="TEXTME!" mode={mode} toggleMode={toggle} />
  <Alert alert={alert}/>
  <div className="container">
  {/* <Routes> */}
          {/* <Route path="/about"  element={<About />}>
           </Route> */}
          {/* <Route path="/" element={<Form  ty="ENTER TEXT HERE" mode={mode}  showAlert={showAlert}/>}>
          </Route> */}
  {/* </Routes> */}
  <Form  ty="ENTER TEXT HERE" mode={mode}  showAlert={showAlert}/>
  </div> 
  {/* </BrowserRouter> */}
 </>
  );
}

export default App;
