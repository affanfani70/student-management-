const express = require("express");
const route = express.Router();
const services = require("../services/render")
const controller = require("../controller/controler")

// route pages
route.get('/', services.homeRoute)
route.get('/add-user', services.addUser)
route.get('/update-user', services.updateUser)


// api call
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route;