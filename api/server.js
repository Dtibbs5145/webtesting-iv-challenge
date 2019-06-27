const express = require('express');
const server = express();

server.use(express.json());
server.get('/', async (req, res) => {
    res.status(200).json({ api: 'up' });
});

server.post('/users', (req, res) => {
    const newUser = req.body;
    if(!newUser.name) {
        return res.status(422).json({ message: 'Do not forget your name!'});
    }
    return User.insert(req.body).then(addUser => res.status(200).json(addUser));
});

server.delete('/users/:id', (req, res) => {
    return User.remove(req.params.id).then(user => {
        if(!user) {
            return res.status(404).json({ message: 'Cannot find user' });
        }
        return res.status(200).json(user);
    });
});

module.exports = server;