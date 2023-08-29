const axios = require("axios");
// const { param } = require("../routes/router");
const url = "http://localhost:3000/api/users";



exports.homeRoute = (req, res) => {
    axios.get(url).then((result) => {
        console.log(result);
        res.render("index", { users: result.data });
    }).catch((err) => {
        res.send(err)
    });


}

exports.addUser = (req, res) => {
    res.render("add_user");
}

exports.updateUser = (req, res) => {
    axios.get(url, { params: { id: req.query.id } }).then((result) => {
        res.render("update_user", { user: result.data });
    }).catch((err) => {
        console.log(err)
    });
}