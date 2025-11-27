import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Counter } from "./components/Counter.jsx";
import { Footer } from "./components/Footer.jsx";
import { About } from "./pages/About.jsx";

function App() {
    return (
        <Router>
            <Header />
            <nav className="navbar">
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
                <Link to="/">Infos</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Counter />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
