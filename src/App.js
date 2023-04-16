import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from "react-router";
import './App.css';
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import TechStack from './TechStack';
import Projects from './Projects';
import Experience from "./Experience";
import { FrontEnd } from './components/FrontEnd';
import { BackEnd } from './components/BackEnd';
import { Others } from './components/Others';



function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/tech-stack" element={<TechStack/>}>
            <Route path='/tech-stack/' element={<FrontEnd/>}/>
            <Route path='/tech-stack/back-end' element={<BackEnd/>}/>
            <Route path='/tech-stack/other-tech' element={<Others/>}/>
          </Route>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
