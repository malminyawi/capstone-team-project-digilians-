import { Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Layout/Navbar/Navbar"
import Footer from "../src/Components/Layout/Footer/Footer"
import Reviews from "./Pages/ReviewsPage";
import './App.css'
import Home from "./Pages/Home";
function App() {


  return (
    <>
      <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                
                
                <Route path="/reviews" element={<Reviews></Reviews>}/>
                 
                
              </Routes>
      <Footer/>
    </>
  )
}

export default App
