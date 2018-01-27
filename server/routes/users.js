const express = require('express');
const router = express.Router();
const User = require('../entities/User');
const db = require('../database');

router.get('/', getAllUsers);
router.get('/:userId', getUser);
router.post('/', addUser);
router.delete('/:userId', deleteUser);
router.patch('/:userId', editUser);

let collection = db.getCollection('users');

function getAllUsers(request, response) {
    response.json(collection.find());
}

function getUser(request, response) {
    response.json(collection.get(request.params.userId));
}

function addUser(request, response) {
    let user = new User(request.body.username, request.body.email, request.body.password);
    response.json(collection.insert(user));
}

function deleteUser(request, response) {
    let userToRemove = collection.get(request.params.userId);
    collection.remove(userToRemove);
    response.json(userToRemove);
}

function editUser(request, response) {
    let userToEdit = collection.get(request.params.userId);
    userToEdit.username = request.body.username;
    userToEdit.email = request.body.email;
    userToEdit.password = request.body.password;
    response.json(userToEdit);
}

module.exports = router;