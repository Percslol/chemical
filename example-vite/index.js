import { ChemicalServer } from "chemicaljs";
import express from "express";

const chemical = new ChemicalServer();
const port = process.env.PORT || 3000;

chemical.app.use(express.static("dist", {
    index: "index.html",
    extensions: ["html"]
}));

chemical.server.listen(port, () => {
    console.log(`Chemical example vite listening on port ${port}`);
});