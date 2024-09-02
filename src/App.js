import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'

function App() {
  return (
    <>
    <Navbar  title="textutils" aboutText="about textutils"/>
    <div className="container">
    <Textform heading="inter the text to analyze"/>
    </div>

   
    </>
  );

}

export default App;
