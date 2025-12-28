import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StationProvider } from "./context/StationProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <StationProvider>
        <App />
    </StationProvider>
);
