const Category = require('../../models/category');

module.exports = {
  index
};

async function index(req, res) {
  try {
    const categories = await Category.find({});
    res.render('categories/index', {
      title: 'Categories',
      categories,
      activeCat: req.query.category || '',
    });
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
}

