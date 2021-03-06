import express from 'express';
import * as serviceOne from '../services/service-one';

const app = express.Router();

app.get('/', (req, res) => {
    res.send("Default GET endpoint");
});

app.get('/doSomething', (req, res) => {
    res.send(serviceOne.serviceOneMethod());
});

app.get('/getUsers', async (req, res) => {
    res.json(await serviceOne.serviceTwoMethod());
});

app.post('/doSomething', (req, res) => {
    res.send("More specific POST endpoint");
});

export default app;