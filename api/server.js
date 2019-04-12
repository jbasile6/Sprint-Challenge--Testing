const express = require('express');

const db = require('../data/dbConfig');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up and running!'})
});

module.exports = server;

server.post('/games', (req, res) => {
    db('games')
        .insert(req.body)
        .then(newGame => {
            res.status(201).json({ message: 'New Game added to Database' })
        })
        .catch(err => res.status(422).json(err))

})