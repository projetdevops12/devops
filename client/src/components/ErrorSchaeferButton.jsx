// src/components/ErrorSchaeferButton.jsx
import React from "react";

export function ErrorSchaeferButton({ onClick }) {
    return (
        <div className="error-card mt-3">
            <div className="error-name">ERROR</div>
            <button className="error-btn" onClick={onClick}>
                Voir
            </button>
        </div>
    );
}
