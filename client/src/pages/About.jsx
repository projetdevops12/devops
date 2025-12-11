import React, { useEffect, useState } from "react";

export function About() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const response = await fetch("https://maastricht.ovh/api/about");
                if (!response.ok) {
                    throw new Error("Erreur serveur : " + response.status);
                }

                const json = await response.json();
                setData(json);
            } catch (err) {
                console.error("Erreur :", err);
                setError(err.message);
            }
        };

        fetchAbout();
    }, []);

    return (
        <div className="page">
            <h2>À propos</h2>

            {error && <p style={{ color: "red" }}>Erreur : {error}</p>}

            {!data && !error ? (
                <p>Chargement...</p>
            ) : (
                data && (
                    <>
                        <p>{data.message}</p>
                        <p>Version : {data.version}</p>
                        <p>Heure serveur : {data.serverTime}</p>
                        <p>Status : {data.status}</p>
                    </>
                )
            )}
        </div>
    );
}
