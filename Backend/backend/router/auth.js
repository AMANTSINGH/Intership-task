const { response } = require('express');
const express = require('express');
const router = express.Router();


require('../db/conn');
const Data = require("../models/sampleData");

router.get('/', (req, res) =>{
    res.send(`Hello World from the server auth`);
});

router.get('/test-page', (req, res) =>{
    console.log(`Test Rule`);
    res.send(`Test Page`);
});

router.get('/sampledata', async (req, res) =>{
    try {
        const sampledata = await Data.find();
        res.status(201).json(sampledata);
        // console.log(sampledata);
    } catch (error) {
        res.status(422).json(error);
    }
});

module.exports = router;