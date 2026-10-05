import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Access Refresh Token API is running");
});

export default app;