import '..App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Room from "./pages/Room";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />  {/* New Landing Page */}
        <Route path="/home" element={<Home />} />  {/* WebRTC Live Page */}
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </Router>
  );
};

export default App;
