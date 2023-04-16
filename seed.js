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
    {name: 'Beef Ribs', category: categories[0], price: 5.99, imageUrl: "https://betterbegrilled.com/wp-content/uploads/2019/06/20190611_194946.jpg"},
    {name: 'Beef Loin', category: categories[0], price: 8.99, imageUrl: "https://www.jerkyholic.com/wp-content/uploads/2022/09/Tenderloin-Overhead.jpg"},
    {name: 'Beef Sirloin', category: categories[0], price: 7.95, imageUrl: "https://sipbitego.com/wp-content/uploads/2022/08/Sliced-Traeger-Smoked-Top-Sirloin-Steak-Cooked-Medium-Rare-Sip-Bite-Go.jpg"},
    {name: 'Beef Brisket', category: categories[0], price: 4.95, imageUrl: 'https://tasteofartisan.com/wp-content/uploads/2021/10/Smoked-Brisket-Done-Right.jpg'},
    {name: 'Lamb Ribs', category: categories[1], price: 23.95, imageUrl:"https://www.foodandwine.com/thmb/sS0UL7ndI-SvluOtajJBVz2jFZ4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/201406-xl-cumin-and-coriander-grilled-lamb-ribs-2000-cc92498e56d54012ac5b9f0e3350f290.jpg"},
    {name: 'Lamb Loin', category: categories[1], price: 18.95, imageUrl: "https://www.tastingtable.com/img/gallery/the-absolute-best-cuts-of-lamb-to-grill/l-intro-1662409186.jpg"},
    {name: 'Lamb Leg', category: categories[1], price: 9.95, imageUrl: "https://howtobbqright.com/wp-content/uploads/2014/12/IMG_1372.jpg"},
    {name: 'Lamb Shoulder', category: categories[1], price: 10.95, imageUrl: "https://www.bradleysmoker.co.nz/wp-content/uploads/2018/04/Smoked-Lamb-Shoulder-1024x768.jpg"},
    // {name: 'Veal Ribs', category: categories[2], price: 23.95},
    // {name: 'Veal Loin', category: categories[2], price: 17.95},
    // {name: 'Veal Shoulder', category: categories[2], price: 10.95},
    // {name: 'Veal Leg', category: categories[2], price: 9.95},
    {name: 'Pork Spare Ribs', category: categories[3], price: 4.95, imageUrl: "https://i1.wp.com/thebbqbuddha.com/wp-content/uploads/2020/04/hot-and-fast-texas-style-spare-ribs-5.jpg"},
    {name: 'Pork Loin', category: categories[3], price: 2.95, imageUrl: "https://masonfit.com/wp-content/uploads/2021/08/bbq-Traeger-smoked-pork-tenderloin-910x1024.jpg"},
    {name: 'Pork Shoulder', category: categories[3], price: 2.95, imageUrl: "https://popmenucloud.com/acyiwtfo/d8879c5e-bf73-459e-8900-90efc88697d9.jpg"},
    {name: 'Pork Belly', category: categories[3], price: 3.95, imageUrl: "https://api.metro.ca/userfiles/image/recipes/flanc-porc-fume-11614.jpg"},
    {name: 'Bratwurst Sausage', category: categories[4], price: 4.95, imageUrl: "https://images.pexels.com/photos/2901854/pexels-photo-2901854.jpeg?cs=srgb&dl=pexels-edwin-jaulani-2901854.jpg&fm=jpg"},
    {name: 'Smoked Sausage', category: categories[4], price: 4.95, imageUrl: "https://saltlickbbq.com/wp-content/uploads/2018/06/HillCountrySausage.jpg"},
    {name: 'Chicken Breast', category: categories[5], price: 4.95, imageUrl: "https://www.modernfarmhouseeats.com/wp-content/uploads/2021/06/grilled-sweet-tangy-bbq-chicken-13.jpg"},
    {name: 'Chicken Tenderloin', category: categories[5], price: 4.15, imageUrl: "https://holmescooks.com/wp-content/uploads/2020/08/6FB1FDBB-FE4D-4BF9-9C99-27B09E812D66-scaled-e1597682854947.jpeg"},
    // {name: 'Chicken Wings', category: categories[5], price: 3.15},
    {name: 'Chicken Thighs', category: categories[5], price: 3.95, imageUrl: "https://www.derrickriches.com/wp-content/uploads/2022/04/Picsart_22-04-08_11-07-29-980-scaled-e1649982939780.jpg"},
    {name: 'Whole Chicken', category: categories[5], price: 2.65, imageUrl: "https://burrataandbubbles.com/wp-content/uploads/2022/05/smoked-whole-chicken.jpg"},
    {name: 'Turkey Breast', category: categories[6], price: 3.95, imageUrl: "https://assets.epicurious.com/photos/62e7fffc4b943936f66f1b86/1:1/w_2560%2Cc_limit/SMOKED%2520TURKEY%2520BREAST%25E2%2580%2594RECIPE.jpg"},
    // {name: 'Turkey Tenderloin', category: categories[6], price: 6.25, imageUrl: ""},
    {name: 'Turkey Leg', category: categories[6], price: 3.95, imageUrl: "https://i2.wp.com/smokedbbqsource.com/wp-content/uploads/2021/11/smoked-turkey-legs-resting.jpg"},
    {name: 'Turkey Thighs', category: categories[6], price: 3.95, imageUrl: "https://i.ytimg.com/vi/eSfWgowqcW8/maxresdefault.jpg"},
    {name: 'Whole Turkey', category: categories[6], price: 1.95, imageUrl: "https://littlesunnykitchen.com/wp-content/uploads/2021/05/Smoked-Turkey-Recipe-3.jpg"},
  ]);

  console.log(items)

  process.exit();

})();
