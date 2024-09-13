import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import {
//   BrowserRouter,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#172943'; 
      showAlert("Dark mode is enabled","success"); 
      document.title = "Textutils : Dark Mode";
      // setInterval(() => {
      //   document.title = "Textutils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutils now.";
      // }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';  
      showAlert("light mode is enabled","success");
      document.title = "Textutils : Light Mode";
    }
  }
  return (
   <>
   {/* <BrowserRouter> */}
    <Navbar abouttext="About textutils"  title="textutils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    {/* <Routes>
          <Route path="/about" element={ <About />} />
          <Route path="/" element={<TextForm heading="Enter the text to Analyze below" showAlert={showAlert} mode={mode}/>} />
    </Routes> */}
     <TextForm heading="Enter the text to Analyze below" showAlert={showAlert} mode={mode}/>

    </div>
    {/* </BrowserRouter> */}
   </>
  );
}

export default App;
