import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/about", (req, res) => {
    res.json({
        message: "Bienvenue sur notre application DevOps full-stack 🚀",
        version: "1.0.0",
    });
});

app.listen(5000, () => console.log("Backend sur http://localhost:5000"));