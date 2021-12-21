# week13-ORM-Homework

## Summary
This is an e-commerce backend project I created. <br>
Using Insomnia to display route functionality. <br>
Enjoy walkthrough demonstration video. <br>

## Languages Used
JavaScript <br>
Sequelize <br>
DotEnv <br>
MySql2 <br>
ExpressJS <br>
NodeJS <br>

## Code Snippet
```
const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const category = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});
```

## Links
[GitHub](https://github.com/OscarP76/week13-ORM-Homework)
[WalkThrough](https://youtu.be/aDR4cJzRc-U)