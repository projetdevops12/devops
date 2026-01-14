import React, { useEffect, useState } from "react";
import { fetchErrorsSchaefer } from "../api/errorsSchaefer.api.js";

export function ErrorSchaeferPanel({ onBack }) {
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        fetchErrorsSchaefer().then(data => {
            console.log("FRONT RECEIVED:", data);
            setErrors(Array.isArray(data.errors) ? data.errors : []);
        });
    }, []);

    return (
        <div className="station-details-panel p-4">

            <button className="back-btn-round" onClick={onBack}> ← </button>

            <h3 className="fw-bold mb-4">Dernières pannes Schaefer</h3>

            <div className="table-responsive">
                <table className="error-table">
                    <thead>
                    <tr>
                        <th>Code</th>
                        <th>Message</th>
                        <th>Description</th>
                        <th>Localisation</th>
                        <th>Date</th>
                        <th>Heure</th>
                    </tr>
                    </thead>

                    <tbody>
                    {errors.map((e) => (
                        <tr key={e.id_error}>
                            <td>
                                    <span className="error-code-badge">
                                        {e.code}
                                    </span>
                            </td>
                            <td>{e.message}</td>
                            <td className="text-info">{e.description}</td>
                            <td>{e.localisation}</td>
                            <td>{new Date(e.date).toISOString().split("T")[0]}</td>
                            <td>{e.hour}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
