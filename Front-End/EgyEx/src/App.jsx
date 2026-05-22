import { Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Layout/Navbar/Navbar"
import Footer from "../src/Components/Layout/Footer/Footer"
import './App.css'
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DestanitionsTrips from "./Pages/DestinationsTrips";
import SingleTripDetails from "./Pages/SingleTripDetails";
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* 
                <Route path="/users" element/>
                <Route path="/projects" element/> 
                */}
        <Route path="/destinations" element={<DestanitionsTrips />}>
          <Route path=":id" element={<SingleTripDetails />} />

          

        </Route>
        {/* just for test */}
          <Route path="/tripDetails" element={<SingleTripDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
