// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About"
import SignUp from "./Pages/SignUp";
import Food from "./Pages/FoodSuggestions";
import Exercise from "./Pages/ExersiseSuggestions";
import Calories from './Pages/Calori'
import Chart from "./Pages/chart"

import "./Index.css";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path = '/Food' element={<Food/>}/>
          <Route path = '/exercise' element={<Exercise/>}/>
          <Route path = '/calories' element={<Calories/>}/>
          <Route path = '/chart' element={<Chart/>}/>


        
        </Route>

        {/* Routes without layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}


