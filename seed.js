require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Beef', sortOrder: 10},
    {name: 'Lamb', sortOrder: 20},
    {name: 'Veal', sortOrder: 30},
    {name: 'Pork', sortOrder: 40},
    {name: 'Sausage', sortOrder: 50},
    {name: 'Chicken', sortOrder: 60},
    {name: 'Turkey', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Beef Ribs', category: categories[0], price: 5.99},
    {name: 'Beef Loin', category: categories[0], price: 8.99},
    {name: 'Beef Sirloin', category: categories[0], price: 7.95},
    {name: 'Beef Brisket', category: categories[0], price: 4.95},
    {name: 'Lamb Ribs', category: categories[1], price: 23.95},
    {name: 'Lamb Loin', category: categories[1], price: 18.95},
    {name: 'Lamb Leg', category: categories[1], price: 9.95},
    {name: 'Lamb Shoulder', category: categories[1], price: 10.95},
    {name: 'Veal Ribs', category: categories[2], price: 23.95},
    {name: 'Veal Loin', category: categories[2], price: 17.95},
    {name: 'Veal Shoulder', category: categories[2], price: 10.95},
    {name: 'Veal Leg', category: categories[2], price: 9.95},
    {name: 'Pork Spare Ribs', category: categories[3], price: 4.95},
    {name: 'Pork Loin', category: categories[3], price: 2.95},
    {name: 'Pork Shoulder', category: categories[3], price: 2.95},
    {name: 'Pork Belly', category: categories[3], price: 3.95},
    {name: 'Bratwurst Sausage', category: categories[4], price: 4.95},
    {name: 'Smoked Sausage', category: categories[4], price: 4.95},
    {name: 'Chicken Breast', category: categories[5], price: 4.95},
    {name: 'Chicken Tenderloin', category: categories[5], price: 4.15},
    {name: 'Chicken Wings', category: categories[5], price: 3.15},
    {name: 'Chicken Thighs', category: categories[5], price: 3.95},
    {name: 'Whole Chicken', category: categories[5], price: 2.65},
    {name: 'Turkey Breast', category: categories[6], price: 3.95},
    {name: 'Turkey Tenderloin', category: categories[6], price: 6.25},
    {name: 'Turkey Leg', category: categories[6], price: 3.95},
    {name: 'Turkey Thighs', category: categories[6], price: 3.95},
    {name: 'Whole Turkey', category: categories[6], price: 1.95},
  ]);

  console.log(items)

  process.exit();

})();
