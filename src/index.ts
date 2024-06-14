import express from "express"

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.status(200).send("Running Express");
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})