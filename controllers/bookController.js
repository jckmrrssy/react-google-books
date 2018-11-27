const db = require("../models");

// export bookController methods
module.exports = {
    findAll: function(req, res) {
        db.Book
            .find(req.query)
            .sort({ date: -1 })
            .then(dbGuy => res.json(dbGuy))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Book
            .findById(req.params.id)
            .then(dbGuy => res.json(dbGuy))
            .catch(err => res.stats(422).json(err));
    },
    create: function(req, res) {
        db.Book.
        create(req.body)
        .then(dbGuy => res.json(dbGuy))
        .catch(err => res.status(422).json(err))
    },
    remove: function(req, res) {
        db.Book
            .findById({ _id: req.params.id})
            .then(dbGuy => dbGuy.remove())
            .then(dbGuy => res.json(dbGuy))
            .catch(err => res.status(422).json(err));
    }
}