import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar1 from "./Components/navbar/Navbar1";
import LoginSignUp from "./Components/login/login";
// import FaceDetection from "./Components/scndpage/scndpage.1";
// import SecondPage from "./Components/scndpage/scndpage"; // Import secondpage
// import FaceDetection from "./Components/scndpage/facedetection"; // Import facedetection
import FaceDetection from "./Components/scndpage/scndpage";
import SecondPage from "./Components/scndpage/scndpage";
import "./App.css";
function App() {
  return (
    <Router>
      <Navbar1 /> {/* Navbar remains consistent across pages */}
      <Routes>
        <Route path="/" element={<LoginSignUp />} /> {/* Default to Login/SignUp */}
        <Route path="login-signup" element={<LoginSignUp />} />
        <Route path="second-page" element={<SecondPage />} /> {/* Route for SecondPage */}
        <Route path="face-detect" element={<FaceDetection />} /> {/* Route for FaceDetection */}
      </Routes>
    </Router>
  );
}

export default App;

