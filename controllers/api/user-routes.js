const router = require('express').Router();
const db = require('.//..//../models/index');

const { append } = require('vary');
const sequelize = require('../../config/connection');
const { Product, User, Price, } = require('../../models');



User.create = (req,res) => {
  if (!req.body.uername, !req.body.user_id, !req.body.email, !req.body.password) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return
  }
  const oneUser = {
    user_id: req.body.user_id,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };
  User.create(oneUser)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "an error occured"
      });
    });
};

User.findOne = (req, res) => {
  const username = req.param.username;
  User.findByPk(username)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Can't find account with username ${username}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving account with username " + username
      });
    });
  };

User.update = (req, res) => {
    const username = req.params.username;
    User.update(req.body, {
      where: { id: username }
    })
      .then(data => {
        if (data) {
          res.send({
          message: "Account was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Account with username ${username}. Maybe Account was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Account with id " + username
        });
      });
  };

  User.delete = (req, res) => {
    const username = req.params.username;
    User.destroy({
      where: { username: username }
    })
    .then(data => {
      if (data) {
        res.send({
        message: "Account was deleted successfully."
        });
      } else {
        res.send({
          message: `Cannot delete Account with username ${username}. Maybe Account was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error deleting account with id " + username
      });
    });
};





sequelize

module.exports = router;
