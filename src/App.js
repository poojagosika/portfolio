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



function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/tech-stack" element={<TechStack/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/experience" element={<Experience/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
