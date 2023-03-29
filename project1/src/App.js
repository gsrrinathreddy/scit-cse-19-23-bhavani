import logo from './logo.svg';
import './App.css';
import INavbar from './components/INavbar';
import { Routes,Route } from 'react-router-dom';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Aboutme from './pages/Aboutme';
import ContactUs from './pages/ContactUs';
import Certifications from './pages/Certifications';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';


function App() {
  return (
    <div className="App">
   
      <INavbar/>
      <Routes>
        <Route path="/Aboutme" element ={<Aboutme/>}/>
        <Route path="/Qualification" element ={<Qualification/>}/>
        <Route path="/Skills" element ={<Skills/>}/>
        <Route path="/Contact Me" element ={<ContactUs/>}/>
        <Route path="/Certifications" element ={<Certifications/>}/>
        <Route path="/Experience" element ={<Experience/>}/>
        <Route path="/Projects" element ={<Projects/>}/>
        <Route path="/Hobbies" element ={<Hobbies/>}/>


      </Routes>


  
    </div>
  );
}

export default App;
