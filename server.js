import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import connectDb from "./server/connectdb.js";
import { elements, initialEdges, initialNodes, urlRendererConfig, formData } from "./server/data.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDb();

app.get("/blueprint", (req, res) => {
    res.json({
        initialEdges,
        initialNodes,
        urlRendererConfig
    });
});

app.get("/formConfiguration", (req, res) => {
    res.json(elements);
});

app.get("/formData", (req, res) => {
    res.json(formData);
});

app.post("/storeData", (req, res) => {
    const updatedData = req.body;
    // Save the updated data
    // ...
    res.sendStatus(200);
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
