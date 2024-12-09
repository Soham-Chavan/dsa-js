import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

const PORT = 5002;
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
console.log(__filename)
console.log(__dirname);
app.listen(PORT)