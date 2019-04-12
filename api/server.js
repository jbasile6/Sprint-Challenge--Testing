const express = require('express');


const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('James Basile: Spring Challenge -- Testing')
});

module.exports = server;