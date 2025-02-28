
import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';


function App() {
const [alert,setAlert] = useState(null);
const showAlert = (message,type) =>{
setAlert({
  msg:message,
  type:type
})
}
const onCloseHandler = () => {
  setAlert(null);
}

const [mode, setMode] = useState('light');
const toggleMode =()=>{
  // mode='dark'?'light':'dark';
  if(mode==='dark'){
    document.body.style.backgroundColor = 'white';
    showAlert('Light Mode Activated','success')
    document.title = 'textUtils - Light Mode'
    setInterval(() => {
      document.title = 'textUtils - Light Mode'
  }, 2000);
  setInterval(() => {
      document.title = 'Amazing text utility app'
  }, 1500);
   return setMode('light')
  }
 else{
  document.body.style.backgroundColor = '#212529d1';
  showAlert('Dark Mode Activated','success')
  document.title = 'textUtils - Dark Mode'
  setInterval(() => {
      document.title = 'textUtils - Dark Mode'
  }, 1000);
  setInterval(() => {
      document.title = 'Amazing text utility app'
  }, 1500);
  return setMode('dark')
 }
}
  return (  <>
<Navbar title="Text Utils" aboutComp="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} onClose = {onCloseHandler}/>
<Textform textformHeading="ENIGMA TEXT EDITOR" mode={mode} />

    </>
  );
}
export default App;
