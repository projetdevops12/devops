import React, { useState } from "react";
import { ErrorSchaeferContext } from "./ErrorSchaeferContext.js";

export function ErrorSchaeferProvider({ children }) {
    const [errors, setErrors] = useState([]);

    const loadErrors = async (filters = {}) => {
        const params = new URLSearchParams(filters).toString();
        const res = await fetch(`/api/errors-schaefer?${params}`);
        const data = await res.json();
        setErrors(data.errors || []);
    };

    return (
        <ErrorSchaeferContext.Provider value={{ errors, loadErrors }}>
            {children}
        </ErrorSchaeferContext.Provider>
    );
}
