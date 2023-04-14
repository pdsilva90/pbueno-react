const Item = require('../../models/item');


module.exports = {
  index,
  show, 
  createItem,
  updateItem,
  deleteItem
};

async function index(req, res) {
  const items = await Item.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the populated categories
  // items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(items);
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.json(item);
}


async function createItem(req, res) {
  console.log(req.body.category)
const newItem = new Item({
  name: req.body.name,
  category: req.body.category.name,
  price: req.body.price,
});
newItem.save((err, item) => {
  if (err) {
    res.status(400).send(err);
  } else {
    res.json(item);
  }
});
};

async function updateItem(req, res) {
  console.log(req.params.id)
Item.findByIdAndUpdate(
  req.params.id,
  {
    name: req.body.name,
    category: req.body.category.name,
    price: req.body.price,
    
  },
  { new: true },
  (err, item) => {
    if (err) {
      res.status(500).send(err);
    } else if (!item) {
      res.status(404).send('Item not found');
    } else {
      res.json(item);
    }
  }
);
};

async function deleteItem(req, res) {
Item.findByIdAndDelete(req.params.id, (err, item) => {
  const confirmDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${deleteItem.name}?`)) {
    deleteItem();
    }
    };
  if (err) {
    res.status(500).send(err);
  } else if (!item) {
    res.status(404).send('Item not found');
  } else {
    res.json(item);
  }
});
};