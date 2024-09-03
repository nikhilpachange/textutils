import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Navbar from './components/Navbar'
import { useState } from 'react';
import Textform from './components/Textform'

function App() {
const [Mode, setMode] = useState('light');
  return (
    <>
    <Navbar  title="textutils" mode={Mode} aboutText="about textutils"/>
    <div className="container">
    <Textform heading="inter the text to analyze"/>
    <About/>
    </div>

   
    </>
  );

}

export default App;
