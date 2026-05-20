import { Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Layout/Navbar/Navbar"
import Footer from "../src/Components/Layout/Footer/Footer"
import './App.css'
import Home from "./Pages/Home";
function App() {


  return (
    <>
      <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                
                {/* 
                <Route path="/users" element/>
                <Route path="/projects" element/> 
                */}
              </Routes>
      <Footer/>
    </>
  )
}

export default App
