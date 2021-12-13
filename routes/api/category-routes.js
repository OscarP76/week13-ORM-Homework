const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  
    try {
      const category = await Category.findAll({
        include: [{ model: Product }],
      });
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
    
});


  // find one category by its `id` value
  // be sure to include its associated Products
  router.get('/:id', async (req, res) => {
    try {
      const singleCategory = await Category.findByPk(req.params.id, {
        include: [{ model: Product }],
      });
  
      if (!singleCategory) {
        res.status(404).json({ message: 'finding one category by id' });
        return;
      }
  
      res.status(200).json(singleCategory);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // create a new category
  router.post('/', async (req, res) => {
    try {
      // Since the model will create a unique UUID value by default, we just need to provide the `id` of the Reader that will own this card
      const newCategory = await Category.create({
        category_id: req.body.category_id,
      });
      res.status(200).json(newCategory);
    } catch (err) {
      res.status(400).json(err);
    }
  });


router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if(deleteCategory) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
