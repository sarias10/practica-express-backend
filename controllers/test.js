import { Router } from "express";

const testRouter = Router();

testRouter.get('/hello-world', (req, res) => {
    res.send('Hello World!')
})

export default testRouter