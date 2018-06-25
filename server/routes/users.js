const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.get('/', (req, res) => {
    User 
        .find()
        .then(users => { res.status(200).json(users); });
});


router.get('/:id', (req, res) => {
    let id = req.params.id;
    User 
        .findById(id)
        .then(users => { users ? (res.status(200).json(users)) : (res.status(404).send()); });
});

router.post('/', (req, res) => {
    let newUser = new User(req.body);
    newUser 
        .save(req.params.id)
        .then(users => { res.status(201).json(users); });
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    User 
        .findByIdAndUpdate(id)
        .then(users => { res.status(204).json(users); });
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;

    User
        .findByIdAndRemove(id)
        .then( users => { res.status(200).json(users); });
});

module.exports = router;