// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StationProvider } from "./context/StationProvider.jsx";
import { MachineProvider } from "./context/MachineProvider.jsx";
import { StationDetailsProvider } from "./context/StationDetailsProvider.jsx";
import { Home } from "./pages/Home.jsx";
import "./index.css";


function App() {
    return (
        <StationProvider>
            <MachineProvider>
                <StationDetailsProvider>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </Router>
                </StationDetailsProvider>
            </MachineProvider>
        </StationProvider>
    );
}

export default App;
