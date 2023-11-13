const cardsDataObj = [
  {
    id: 1,
    name: "Organic Oatmeal",
    desc: "This oatmeal makes a delicious, chewy, wholesome hot cereal that will give you lasting energy throughout the morning. ",
    price: "$12.50 ",
    picture: "https://i.imgur.com/jLkQ4El.png",
    rating: "4.5"
  },
  {
    id: 2,
    name: "Grilled Panini",
    desc: "Fresh toppings and perfectly melted cheese makes every bite of our Grilled Panini simply mouthwatering. ",
    price: "$13.90",
    picture: "https://i.imgur.com/BAAtOE5.png",
    rating: "4.2"
  },
  {
    id: 3,
    name: "Eggplant Sandwiches",
    desc: "Roasted eggplant in a French roll with feta cheese, basil and garlic mayonnaise. It’s a No. 1 favorite of our clients.  ",
    price: "$10.90 ",
    picture: "https://i.imgur.com/Quazh6g.png ",
    rating: "3.5"
  },
  {
    id: 4,
    name: "Stack of Pancakes",
    desc: "Taste this homey goodness of plain golden pancakes served with whipped butter cooked according to our chef’s recipe ",
    price: "$9.50 ",
    picture: "https://i.imgur.com/DaMzoZS.png",
    rating: "2.5"
  },
  {
    id: 5,
    name: "Noodle Soup ",
    desc: "Made-from-scratch noodles are the star of this soup, which is a true classic for all our clients. ",
    price: "$12.50 ",
    picture: "https://i.imgur.com/hNJHUv6.jpg ",
    rating: "3.1"
  },
  {
    id: 6,
    name: "Vegetable Soup",
    desc: "Based on vegetable broth, barley, and lots of veggies, this soup tastes really hearty and filling, and is perfect during dinner. ",
    price: "$13.90 ",
    picture: "https://i.imgur.com/DS2PxDr.jpg",
    rating: "4.3"
  },
  {
    id: 7,
    name: "Falafel",
    desc: "Deep fried, and made with yellow split peas, onion, fresh mint, and spices, these falafel are great when served in pita with salad. ",
    price: "$10.90 ",
    picture: "https://i.imgur.com/UrWjZyT.jpg ",
    rating: "4.2"
  },
  {
    id: 8,
    name: "Mashed Potatoes ",
    desc: "These simple mashed potatoes are made with a touch of garlic for a supersavory flavor everyone will relish in.",
    price: "$9.50 ",
    picture: "https://i.imgur.com/wGstXhV.jpg ",
    rating: "4.00"
  },
  {
    id: 9,
    name: "Medu Wada ",
    desc: "Medu Wada is a traditional Indian snack, which is perfect to have during lunchtime, especially dunked in hot sambar ",
    price: "$12.50 ",
    picture: "https://i.imgur.com/INeudag.jpg ",
    rating: "3.9"
  },
  {
    id: 10,
    name: "Zrazy",
    desc: "Zrazy is a traditional Ukrainian snack, which tastes like small meat or potato pie and has a lot of other fillings. ",
    price: "$13.90",
    picture: "https://i.imgur.com/MPHlVIV.jpg ",
    rating: "3.6"
  },
  {
    id: 11,
    name: "Puff Pastry Bun ",
    desc: "These tasty puff pastry buns are perfect sides to any hot drink like tea or coffee during lunch. Try them out at our restaurant! ",
    price: "$10.90 ",
    picture: "https://i.imgur.com/QhIVVeK.jpg",
    rating: "2.8"
  },
  {
    id: 12,
    name: "Sandwiches with Cheese ",
    desc: "Sandwiches have always been perfect snacks during lunch or dinner, but they taste even better with cheese and dried vegetables ",
    price: "$9.50",
    picture: "https://i.imgur.com/QJzWYjm.jpg",
    rating: "5.00"
  },
  {
    id: 13,
    name: "Mozzarella Salad ",
    desc: "Fresh Mozzarella, roasted pepper, tomatoes, walnut, basil pesto, balsamic sauce and mixed green salad served in one bowl. ",
    price: "12.50 ",
    picture: "https://i.imgur.com/Y0nrHUR.jpg",
    rating: "4.5"
  },
  {
    id: 14,
    name: "Greek Salad ",
    desc: "Cucumbers, grape tomatoes, red onions, banana peppers, black olives, and feta cheese add this salad a real Greek taste. ",
    price: "$13.90 ",
    picture: "https://i.imgur.com/722myxX.jpg ",
    rating: "4.5"
  },
  {
    id: 15,
    name: "Caesar Salad ",
    desc: "All summer vegetables are packed into one salad, which is mixed with a truly Italian flavor. Enjoy this masterpiece at our restaurant! ",
    price: "$10.90 ",
    picture: "https://i.imgur.com/diVS1Sf.jpg ",
    rating: "3.4"
  },
  {
    id: 16,
    name: "Italian Chopped Salad ",
    desc: "All summer vegetables are packed into one salad, which is mixed with a truly Italian flavor. Enjoy this masterpiece! ",
    price: "$9.50 ",
    picture: "https://i.imgur.com/d1va70S.jpg ",
    rating: "2.5"
  },
  {
    id: 17,
    name: "Strawberry Cake",
    desc: "This cake truly lives up to its name! Three cake layers are filled with strawberry-studded whipped cream, which tastes delicious! ",
    price: "$12.50 ",
    picture: "https://i.imgur.com/QHBUQYT.jpg ",
    rating: "4.8"
  },
  {
    id: 18,
    name: "Domino Cake",
    desc: "Enjoy this classic dessert with cocoa powder, icing sugar, and chocolate filling combined with tasty sponge cakes. ",
    price: "$13.90",
    picture: "https://i.imgur.com/9nTxw89.jpg ",
    rating: "4.6"
  },
  {
    id: 19,
    name: "Coconut Cake",
    desc: "With coconut baked into the cake and a generous sprinkle atop a buttery frosting, this decadent white cake is sure to be your No. 1.",
    price: "$10.90",
    picture: "https://i.imgur.com/qRXEU0r.jpg",
    rating: "2.6"
  },
  {
    id: 20,
    name: "Cake with Lime",
    desc: "If you enjoy lime and like tasty and sweet desserts, this one will quickly become your favorite.",
    price: "$9.50",
    picture: "https://i.imgur.com/uy7o4Mj.jpg",
    rating: "3.5"
  },
  {
    id: 21,
    name: "Lime juice",
    desc: "This amazing lime juice is our favorite as it is healthy and energizing drink, which is also refreshing in summer.",
    price: "$12.50",
    picture: "https://i.imgur.com/mcO4hRx.jpg",
    rating: "4.4"
  },
  {
    id: 22,
    name: "Strawberry juice ",
    desc: "When it comes to , strawberries get short shrift. This strawberry drink is our summer favorite. ",
    price: "$13.90 ",
    picture: "https://i.imgur.com/J04Tjuj.jpg",
    rating: "3.7"
  },
  {
    id: 23,
    name: "Orange Juice ",
    desc: "This quick, fresh, and delicious juice is loaded with carrots and oranges, and is a great way to start off your day! ",
    price: "$10.90 ",
    picture: "https://i.imgur.com/YJZ4kxj.jpg",
    rating: "3.8"
  },
  {
    id: 24,
    name: "Iced Water ",
    desc: "This drink is an old classic enjoyed by many, kids and adults. This will be sure to please especially on a hot day. ",
    price: "$9.50 ",
    picture: "https://i.imgur.com/oj0yU3J.jpg",
    rating: "2.9"
  },
];


export { cardsDataObj };
