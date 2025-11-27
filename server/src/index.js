import express from "express";
import path from "path";
import cors from "cors";

const app = express();

// === Middleware ===
app.use(cors()); // utile si tu veux tester avec front dev séparé
app.use(express.json()); // parse le JSON pour POST si besoin

// === API Routes ===
app.get("/api/about", (req, res) => {
    res.json({
        message: "Ceci est la seconde page de mon projet React avec Vite.",
        version: "1.0.0",
        serverTime: new Date().toISOString(),
        status: "OK",
    });
});


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "../client/dist")));
console.log(__dirname);
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server en production sur http://localhost:${PORT}`);
});
