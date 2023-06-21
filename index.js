import express from "express";

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "healthy"
    });
});

app.post('/register', (req, res) => {
    res.json({
        success: true,
        message: "user register"
    });
});

app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
});