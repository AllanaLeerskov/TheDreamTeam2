const router = require('express').Router();
const db = require('.//..//../models/index');

const { append } = require('vary');
const sequelize = require('../../config/connection');
const { Product, User, Price, } = require('../../models');

Price.create = (req,res) => {
  if (!req.body.price_id, !req.body.lower, !req.body.upper) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
};


router.post('/', (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  Price.create({
    
    user_id: req.session.user_id,
    product_id: req.body.product_id
  })
    .then(dbPriceData => res.json(dbPriceData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Price.destroy({
    where: {
      product_id: req.params.product_id
    }
  })
    .then(dbPriceData => {
      if (!dbPriceData) {
        res.status(404).json({ message: 'No price found with this product!' });
        return;
      }
      res.json(dbCommentData);
    return
  });
  const onePrice = {
    price_id: req.body.price_id,
    lower: req.body.lower,
    upper: req.body.upper
  };
  Product.create(onePrice)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "an error occured"
      });
    });
});

Price.findOne = (req, res) => {
  const price_id = req.param.price_id;
  Price.findByPk(price_id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Can't find product with price_id ${price_id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving product with price_id " + price_id
      });
    });
  };

Price.findAll  = (req, res) => {
  const price_id = req.query.price_id;
  var condition = price_id ? { price_id: { [Op.iLike]: `%${price_id}%` } } : null;
  Price.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving prices."
      });
    });
};

Price.update = (req, res) => {
    const product_id = req.params.price_id;
    Price.update(req.body, {
      where: { price_id }
    })
      .then(data => {
        if (data) {
          res.send({
          message: "Price was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update price with price_id ${price_id}. Maybe the price was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating price with price_id " + price_id
        });
      });
  };

  Price.delete = (req, res) => {
    const price_id = req.params.price_id;
    Price.destroy({
      where: { price_id: price_id }
    })
    .then(data => {
      if (data) {
        res.send({
        message: "Price was deleted successfully."
        });
      } else {
        res.send({
          message: `Cannot delete price with price_id ${price_id}. Maybe price was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error deleting price with price_id " + price_id
      });
    });
};

Price.findAllPublished = (req, res) => {
  Price.findAll
  ({ 
    where: { published: true }
   })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving prices."
      });
    });
};
}

sequelize

module.exports = router;