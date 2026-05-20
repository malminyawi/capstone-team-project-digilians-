import { Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Layout/Navbar/Navbar"
import Footer from "../src/Components/Layout/Footer/Footer"
import './App.css'
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
function App() {


  return (
    <>
      <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                 <Route path="/register" element={<Register/>}/>
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
