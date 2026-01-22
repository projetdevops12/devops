import React, { useEffect, useState } from "react";
import { fetchErrorsSchaefer } from "../api/errorsSchaefer.api.js";

export function ErrorSchaeferPanel({ onBack }) {
    const [errors, setErrors] = useState([]);

    const [searchMessage, setSearchMessage] = useState("");
    const [searchLocalisation, setSearchLocalisation] = useState("");

    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

    useEffect(() => {
        fetchErrorsSchaefer().then(data => {
            setErrors(Array.isArray(data.errors) ? data.errors : []);
        });
    }, []);

    function sortBy(key) {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });
    }

    // 1) Filtres uniquement
    const filteredErrors = errors
        .filter(e => e.message.toLowerCase().includes(searchMessage.toLowerCase()))
        .filter(e => e.localisation.toLowerCase().includes(searchLocalisation.toLowerCase()));

    // 2) Tri uniquement pour le tableau du bas
    const sortedErrors = [...filteredErrors].sort((a, b) => {
        if (!sortConfig.key) return 0;

        const valueA = a[sortConfig.key];
        const valueB = b[sortConfig.key];

        if (valueA < valueB) return sortConfig.direction === "asc" ? -1 : 1;
        if (valueA > valueB) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
    });

    // --- STATISTIQUES ---
    const totalErrors = filteredErrors.length;

    const errorsByMessage = filteredErrors.reduce((acc, e) => {
        acc[e.message] = (acc[e.message] || 0) + 1;
        return acc;
    }, {});

    const errorsByLocalisation = filteredErrors.reduce((acc, e) => {
        acc[e.localisation] = (acc[e.localisation] || 0) + 1;
        return acc;
    }, {});

    const firstError = filteredErrors[0]?.hour || null;
    const lastError = filteredErrors[filteredErrors.length - 1]?.hour || null;

    const mostCommonMessage = Object.entries(errorsByMessage).sort((a, b) => b[1] - a[1])[0];
    const mostCommonLoc = Object.entries(errorsByLocalisation).sort((a, b) => b[1] - a[1])[0];

    return (
        <div className="station-details-panel p-4">

            <button className="back-btn-round" onClick={onBack}> ← </button>

            <h3 className="fw-bold mb-4">Dernières pannes Schaefer</h3>

            {/* TABLEAU DE STATISTIQUES */}
            <div className="table-responsive mb-4">
                <table className="stats-table">
                    <thead>
                    <tr>
                        <th>Statistique</th>
                        <th>Valeur</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr><td>Total d’erreurs</td><td>{totalErrors}</td></tr>
                    <tr>
                        <td>Erreur la plus fréquente</td>
                        <td>{mostCommonMessage ? `${mostCommonMessage[0]} (${mostCommonMessage[1]})` : "—"}</td>
                    </tr>
                    <tr>
                        <td>Localisation la plus touchée</td>
                        <td>{mostCommonLoc ? `${mostCommonLoc[0]} (${mostCommonLoc[1]})` : "—"}</td>
                    </tr>
                    <tr><td>Première erreur</td><td>{firstError || "—"}</td></tr>
                    <tr><td>Dernière erreur</td><td>{lastError || "—"}</td></tr>
                    </tbody>
                </table>
            </div>

            {/* TABLEAU : Erreurs par message */}
            <div className="table-responsive mb-4">
                <h5 className="fw-bold">Erreurs par message</h5>
                <table className="stats-table">
                    <thead>
                    <tr>
                        <th>Message</th>
                        <th>Occurrences</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(errorsByMessage).map(([msg, count]) => (
                        <tr key={msg}>
                            <td>{msg}</td>
                            <td>{count}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* TABLEAU : Erreurs par localisation */}
            <div className="table-responsive mb-4">
                <h5 className="fw-bold">Erreurs par localisation</h5>
                <table className="stats-table">
                    <thead>
                    <tr>
                        <th>Localisation</th>
                        <th>Occurrences</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(errorsByLocalisation).map(([loc, count]) => (
                        <tr key={loc}>
                            <td>{loc}</td>
                            <td>{count}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* FILTRES */}
            <div className="filters mb-4">
                <input
                    type="text"
                    placeholder="Filtrer par message..."
                    className="form-control mb-2"
                    value={searchMessage}
                    onChange={(e) => setSearchMessage(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Filtrer par localisation..."
                    className="form-control"
                    value={searchLocalisation}
                    onChange={(e) => setSearchLocalisation(e.target.value)}
                />
            </div>

            {/* TABLEAU DES ERREURS — SCROLLABLE */}
            <div className="table-scroll">
                <table className="error-table">
                    <thead>
                    <tr>
                        <th onClick={() => sortBy("code")}>Code</th>
                        <th onClick={() => sortBy("message")}>Message</th>
                        <th>Description</th>
                        <th onClick={() => sortBy("localisation")}>Localisation</th>
                        <th onClick={() => sortBy("date")}>Date</th>
                        <th onClick={() => sortBy("hour")}>Heure</th>
                    </tr>
                    </thead>

                    <tbody>
                    {sortedErrors.map((e) => (
                        <tr key={e.id_error}>
                            <td><span className="error-code-badge">{e.code}</span></td>
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
