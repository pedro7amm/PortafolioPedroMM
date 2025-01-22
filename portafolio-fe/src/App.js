import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MenuBar from './components/Navigation/MenuBar';
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <MenuBar />
                <div className="content-container">
                    <Routes>
                        <Route path="/PortafolioPedroMM" element={<Navigate to="/Home" />} />
                        <Route path="/" element={<Navigate to="/Home" />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Experience" element={<Experience />} />
                        <Route path="/Projects" element={<Projects />} />
                        <Route path="/Contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;