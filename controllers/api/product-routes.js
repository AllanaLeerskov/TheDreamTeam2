const router = require('express').Router();
const db = require('.//..//../models/index');

const { append } = require('vary');
const sequelize = require('../../config/connection');
const { Product, User, Price, } = require('../../models');

Product.create = (req,res) => {
  if (!req.body.product_id, !req.body.title, !req.body.description, !req.body.price_id, !req.body.photo, !req.body.user_id) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });


router.get('/:id', (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'photo_url',
      'title',
      'description_url',
      'user_id',
      'price_url',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Price,
        attributes: ['product_id', 'user_id'],
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
      res.json(dbProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
  console.log('======================');
  Product.findAll({
    attributes: [
      'id',
      'photo_url',
      'title',
      'description_url',
      'user_id',
      'price_url',
      [sequelize.literal('(SELECT COUNT(*) FROM product WHERE product.id = user.product_id)')]
    ],
    include: [
      {
        model: Price,
        attributes: ['product_id', 'user_id'],
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'photo_url',
      'title',
      'description_url',
      'user_id',
      'price_url',
    ],
    include: [
      {
        model: Price,
        attributes: ['product_id', 'user_id'],
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
      res.json(dbProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// router.post('/', (req, res) => {
//   Product.create({
//   id: req.body.id,
//   return
// });
// });
  
  
  
  const oneProduct = {
    user_id: req.body.user_id,
    product_id: req.body.product_id,
    title: req.body.title,
    description: req.body.description,
    photo: req.body.photo,
    price_id: req.body.price_id
  };
  Product.create(oneProduct)
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

Product.findOne = (req, res) => {
  const product_id = req.param.product_id;
  Product.findByPk(product_id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Can't find account with product_id ${product_id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving product with product_id " + product_id
      });
    });
  };

Product.findAll  = (req, res) => {
  const product_id = req.query.product_id;
  var condition = product_id ? { product_id: { [Op.iLike]: `%${product_id}%` } } : null;
  Product.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });
};

Product.update = (req, res) => {
    const product_id = req.params.product_id;
    Product.update(req.body, {
      where: { product_id }
    })
      .then(data => {
        if (data) {
          res.send({
          message: "Product was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Product with product_id ${product_id}. Maybe the product was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating product with product_id " + product_id
        });
      });
  };

  Product.delete = (req, res) => {
    const product_id = req.params.product_id;
    Product.destroy({
      where: { product_id: product_id }
    })
    .then(data => {
      if (data) {
        res.send({
        message: "Product was deleted successfully."
        });
      } else {
        res.send({
          message: `Cannot delete product with product_id ${product_id}. Maybe product was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error deleting product with produdct_id " + product_id
      });
    });
};

Product.findAllPublished = (req, res) => {
  Product.findAll({ 
    where: { published: true } 
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });
};
};

sequelize



module.exports = router;
