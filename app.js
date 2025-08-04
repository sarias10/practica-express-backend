import express from "express";
import testRouter from "./controllers/test.js"; // ojo con el .js

const app = express()

app.use(express.json())

app.use('/', testRouter)
export default app;