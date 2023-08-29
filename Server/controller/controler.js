const userDB = require("../models/model");


// create the new user
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty" })
    }

    const user = new userDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    user.save(user).then((result) => {
        // res.send(result)
        res.redirect('/')
    }).catch((err) => {
        res.status(5000).send({
            message: err.message || "Some Error Occurer while updating data"
        })
    });
}

// retrive single or all the use 
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        userDB.findById(id).then((result) => {
            if (!result) {
                res.status(404).send({message:"Record doesn't match"})
            }else{
                res.send(result)
            }
        }).catch((err) => {
            res.status(500).send("Error in reading the result of id:"+id);
        });
    } else {
        userDB.find().then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(5000).send({
                message: err.message || "Some Error Occurer while Reading the data"
            })
        })
    }

}

// update the user data with specified user id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "connot update the empty body"
        })
    }
    const id = req.params.id;
    userDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then((result) => {
        if (!result) {
            res.status(404).send({
                message: `cannot update user with id: ${id}`
            })
        } else {
            res.send(result);
        }
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Error in updating User data"
        })
    })

}

// delete the user with specified user id
exports.delete = (req, res) => {
    const id = req.params.id;

    userDB.findByIdAndDelete(id).then((result) => {
        if (!result) {
            res.status(404).send({
                message: `cannot not delete user with id: ${id}`
            })
        } else {
            res.send({
                message: "user deleted successfully"
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: err.message || `cannot not delete user with id: ${id}`
        })
    })
}