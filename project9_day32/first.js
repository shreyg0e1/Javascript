
        // <!-------------------------------100 Restraurant Raw Data -------------------------------->

const restaurants= [
    {
        "image": "seventh",
        "name": "Kalsang AMA Cafe",
        "rating": 3,
        "food_type": "Street Food",
        "price_for_two": "1000 for two",
        "locations": "Clock Tower",
        "Distance_from_Customer_house": "7.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 13,
        "Restaurant_close_time": 1
    },
    {
        "image": "ninth",
        "name": "Y Cafe & Restaurant 23",
        "rating": 3,
        "food_type": "Thai",
        "price_for_two": "2000 for two",
        "locations": "Rajpur Road",
        "Distance_from_Customer_house": "1.0",
        "Offers": "Flat 15% OFF",
        "alchol": false,
        "Restaurant_open_time": 0,
        "Restaurant_close_time": 12
    },
    {
        "image": "eight",
        "name": "Y Cafe & Restaurant",
        "rating": 1,
        "food_type": "North Indian",
        "price_for_two": "2000 for two",
        "locations": "Mall Road",
        "Distance_from_Customer_house": "7.0",
        "Offers": "Flat 15% OFF",
        "alchol": false,
        "Restaurant_open_time": 2,
        "Restaurant_close_time": 14
    },
    {
        "image": "second",
        "name": "Y Cafe & Restaurant",
        "rating": 1,
        "food_type": "Mexican",
        "price_for_two": "2500 for two",
        "locations": "Rajpur Road",
        "Distance_from_Customer_house": "1.0",
        "Offers": "Flat 10% OFF",
        "alchol": true,
        "Restaurant_open_time": 11,
        "Restaurant_close_time": 23
    },
    {
        "image": "third",
        "name": "Kalsang AMA Cafe",
        "rating": 3,
        "food_type": "Chinese",
        "price_for_two": "2000 for two",
        "locations": "Rajpur Road",
        "Distance_from_Customer_house": "4.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 21,
        "Restaurant_close_time": 9
    },
    {
        "image": "first",
        "name": "The Great Indian Pub",
        "rating": 3,
        "food_type": "Thai",
        "price_for_two": "1000 for two",
        "locations": "Jakhan",
        "Distance_from_Customer_house": "2.0",
        "Offers": "Flat 10% OFF",
        "alchol": true,
        "Restaurant_open_time": 18,
        "Restaurant_close_time": 6
    },
    {
        "image": "first",
        "name": "Black Pepper",
        "rating": 2,
        "food_type": "North Indian",
        "price_for_two": "2500 for two",
        "locations": "Ballupur",
        "Distance_from_Customer_house": "3.0",
        "Offers": "Flat 10% OFF",
        "alchol": true,
        "Restaurant_open_time": 4,
        "Restaurant_close_time": 16
    },
    {
        "image": "sixth",
        "name": "Kalsang AMA Cafe",
        "rating": 4,
        "food_type": "Thai",
        "price_for_two": "1000 for two",
        "locations": "Ballupur",
        "Distance_from_Customer_house": "2.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 21,
        "Restaurant_close_time": 9
    },
    {
        "image": "seventh",
        "name": "Y Cafe & Restaurant",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": "2000 for two",
        "locations": "Ballupur",
        "Distance_from_Customer_house": "5.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 13,
        "Restaurant_close_time": 1
    },
    {
        "image": "sixth",
        "name": "Black Pepper",
        "rating": 1,
        "food_type": "North Indian",
        "price_for_two": "1000 for two",
        "locations": "Jakhan",
        "Distance_from_Customer_house": "3.0",
        "Offers": "Flat 10% OFF",
        "alchol": true,
        "Restaurant_open_time": 23,
        "Restaurant_close_time": 11
    },
     {
        "image": "eight",
        "name": "Y Cafe & Restaurant",
        "rating": 1,
        "food_type": "Mexican",
        "price_for_two": "2000 for two",
        "locations": "Hathibarkala",
        "Distance_from_Customer_house": "4.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 21,
        "Restaurant_close_time": 9
    },
    {
        "image": "seventh",
        "name": "Anandam",
        "rating": 1,
        "food_type": "Mughlai",
        "price_for_two": "2000 for two",
        "locations": "Jakhan",
        "Distance_from_Customer_house": "5.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 6,
        "Restaurant_close_time": 18
    },
    {
        "image": "eight",
        "name": "The Great Indian Pub",
        "rating": 5,
        "food_type": "Street Food",
        "price_for_two": "2000 for two",
        "locations": "Astley Hall",
        "Distance_from_Customer_house": "4.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 9,
        "Restaurant_close_time": 21
    },
   {
    "image": "ninth",
    "name": "Town Table",
    "rating": 1,
    "food_type": "Street Food",
    "price_for_two": "1000 for two",
    "locations": "Pacific Mall",
    "Distance_from_Customer_house": "6.0",
    "Offers": "",
    "alchol": true,
    "Restaurant_open_time": 6,
    "Restaurant_close_time": 18
},
{
    "image": "tenth",
    "name": "Muse Restobar",
    "rating": 4,
    "food_type": "North Indian",
    "price_for_two": "1000 for two",
    "locations": "Ballupur",
    "Distance_from_Customer_house": "3.0",
    "Offers": "",
    "alchol": false,
    "Restaurant_open_time": 10,
    "Restaurant_close_time": 22
},
{
    "image": "ninth",
    "name": "The Great Indian Pub",
    "rating": 4,
    "food_type": "Chinese",
    "price_for_two": "1000 for two",
    "locations": "Pacific Mall",
    "Distance_from_Customer_house": "1.0",
    "Offers": "Flat 10% OFF",
    "alchol": true,
    "Restaurant_open_time": 18,
    "Restaurant_close_time": 6
},
{
    "image": "ninth",
    "name": "Kalsang AMA Cafe",
    "rating": 5,
    "food_type": "Mexican",
    "price_for_two": "1000 for two",
    "locations": "Astley Hall",
    "Distance_from_Customer_house": "4.0",
    "Offers": "Flat 10% OFF",
    "alchol": false,
    "Restaurant_open_time": 2,
    "Restaurant_close_time": 14
},
{
    "image": "tenth",
    "name": "Kalsang Friends Corner",
    "rating": 4,
    "food_type": "Chinese",
    "price_for_two": "1000 for two",
    "locations": "Pacific Mall",
    "Distance_from_Customer_house": "6.0",
    "Offers": "Flat 15% OFF",
    "alchol": false,
    "Restaurant_open_time": 4,
    "Restaurant_close_time": 16
},
{
    "image": "seventh",
    "name": "Muse Restobar",
    "rating": 5,
    "food_type": "North Indian",
    "price_for_two": "1000 for two",
    "locations": "Mall Road",
    "Distance_from_Customer_house": "1.0",
    "Offers": "Flat 10% OFF",
    "alchol": false,
    "Restaurant_open_time": 7,
    "Restaurant_close_time": 19
},
{
    "image": "ninth",
    "name": "Town Table",
    "rating": 3,
    "food_type": "Italian",
    "price_for_two": "1000 for two",
    "locations": "Mall Road",
    "Distance_from_Customer_house": "1.0",
    "Offers": "Flat 10% OFF",
    "alchol": true,
    "Restaurant_open_time": 19,
    "Restaurant_close_time": 7
},
    {
        "image": "sixth",
        "name": "Town Table",
        "rating": 5,
        "food_type": "South Indian",
        "price_for_two": "2000 for two",
        "locations": "Rajpur Road",
        "Distance_from_Customer_house": "7.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 15,
        "Restaurant_close_time": 3
    },
    {
        "image": "fourth",
        "name": "Kalsang Friends Corner",
        "rating": 4,
        "food_type": "Mughlai",
        "price_for_two": "2000 for two",
        "locations": "Rajpur",
        "Distance_from_Customer_house": "3.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 18,
        "Restaurant_close_time": 6
    },
    {
        "image": "fifth",
        "name": "The Great Indian Pub",
        "rating": 4,
        "food_type": "Street Food",
        "price_for_two": "2000 for two",
        "locations": "Paltan Bazaar",
        "Distance_from_Customer_house": "2.0",
        "Offers": "",
        "alchol": true,
        "Restaurant_open_time": 8,
        "Restaurant_close_time": 20
    },
    {
        "image": "ninth",
        "name": "Town Table",
        "rating": 1,
        "food_type": "Chinese",
        "price_for_two": "2000 for two",
        "locations": "Clock Tower",
        "Distance_from_Customer_house": "5.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 5,
        "Restaurant_close_time": 17
    },
    {
        "image": "eight",
        "name": "Kalsang Friends Corner",
        "rating": 2,
        "food_type": "Street Food",
        "price_for_two": "2000 for two",
        "locations": "Rajpur Road",
        "Distance_from_Customer_house": "2.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 6,
        "Restaurant_close_time": 18
    },
    {
        "image": "sixth",
        "name": "Kalsang Friends Corner",
        "rating": 5,
        "food_type": "Continental",
        "price_for_two": "2000 for two",
        "locations": "Astley Hall",
        "Distance_from_Customer_house": "7.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 5,
        "Restaurant_close_time": 17
    },
    {
        "image": "eight",
        "name": "Town Table",
        "rating": 4,
        "food_type": "North Indian",
        "price_for_two": "2000 for two",
        "locations": "Rajpur Road",
        "Distance_from_Customer_house": "3.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 9,
        "Restaurant_close_time": 21
    },
    {
        "image": "first",
        "name": "Kalsang AMA Cafe",
        "rating": 1,
        "food_type": "Italian",
        "price_for_two": "2000 for two",
        "locations": "Clock Tower",
        "Distance_from_Customer_house": "5.0",
        "Offers": "Flat 10% OFF",
        "alchol": true,
        "Restaurant_open_time": 0,
        "Restaurant_close_time": 12
    },
    {
        "image": "eight",
        "name": "Kalsang AMA Cafe",
        "rating": 2,
        "food_type": "Italian",
        "price_for_two": "2000 for two",
        "locations": "Hathibarkala",
        "Distance_from_Customer_house": "2.0",
        "Offers": "Flat 10% OFF",
        "alchol": true,
        "Restaurant_open_time": 4,
        "Restaurant_close_time": 16
    },
    {
        "image": "tenth",
        "name": "Muse Restobar",
        "rating": 4,
        "food_type": "Street Food",
        "price_for_two": "2000 for two",
        "locations": "Ballupur",
        "Distance_from_Customer_house": "6.0",
        "Offers": "Flat 10% OFF",
        "alchol": false,
        "Restaurant_open_time": 15,
        "Restaurant_close_time": 3
    },
    {
        "image": "third",
        "name": "Kalsang AMA Cafe",
        "rating": 5,
        "food_type": "Mughlai",
        "price_for_two": "2000 for two",
        "locations": "Jakhan",
        "Distance_from_Customer_house": "2.0",
        "Offers": "Flat 10% OFF",
        "alchol": false,
        "Restaurant_open_time": 9,
        "Restaurant_close_time": 21
    },
    {
    "image": "fifth",
    "name": "Orchard",
    "rating": 1,
    "food_type": "North Indian",
    "price_for_two": "1000 for two",
    "locations": "Astley Hall",
    "Distance_from_Customer_house": "6.0",
    "Offers": "Flat 10% OFF",
    "alchol": false,
    "Restaurant_open_time": 0,
    "Restaurant_close_time": 12
},
{
    "image": "seventh",
    "name": "Orchard",
    "rating": 1,
    "food_type": "Continental",
    "price_for_two": "1000 for two",
    "locations": "Ballupur",
    "Distance_from_Customer_house": "1.0",
    "Offers": "Flat 15% OFF",
    "alchol": false,
    "Restaurant_open_time": 13,
    "Restaurant_close_time": 1
},
{
    "image": "first",
    "name": "Orchard",
    "rating": 5,
    "food_type": "Chinese",
    "price_for_two": "1000 for two",
    "locations": "Rajpur",
    "Distance_from_Customer_house": "1.0",
    "Offers": "Flat 15% OFF",
    "alchol": false,
    "Restaurant_open_time": 6,
    "Restaurant_close_time": 18
},
{
    "image": "eight",
    "name": "Black Pepper",
    "rating": 3,
    "food_type": "North Indian",
    "price_for_two": "1000 for two",
    "locations": "Rajpur Road",
    "Distance_from_Customer_house": "1.0",
    "Offers": "Flat 10% OFF",
    "alchol": false,
    "Restaurant_open_time": 8,
    "Restaurant_close_time": 20
},
{
    "image": "sixth",
    "name": "Y Cafe & Restaurant",
    "rating": 5,
    "food_type": "Thai",
    "price_for_two": "1000 for two",
    "locations": "Jakhan",
    "Distance_from_Customer_house": "3.0",
    "Offers": "Flat 10% OFF",
    "alchol": false,
    "Restaurant_open_time": 16,
    "Restaurant_close_time": 4
},
{
    "image": "tenth",
    "name": "Y Cafe & Restaurant",
    "rating": 3,
    "food_type": "Indian",
    "price_for_two": "1000 for two",
    "locations": "Hathibarkala",
    "Distance_from_Customer_house": "4.0",
    "Offers": "Flat 15% OFF",
    "alchol": false,
    "Restaurant_open_time": 16,
    "Restaurant_close_time": 4
},
{
    "image": "first",
    "name": "Anandam",
    "rating": 3,
    "food_type": "Chinese",
    "price_for_two": "1000 for two",
    "locations": "Ballupur",
    "Distance_from_Customer_house": "3.0",
    "Offers": "Flat 15% OFF",
    "alchol": false,
    "Restaurant_open_time": 19,
    "Restaurant_close_time": 7
},
    {
        "image": "eight",
        "name": "Town Table",
        "rating": 4,
        "food_type": "Indian",
        "price_for_two": "2000 for two",
        "locations": "Rajpur Road",
        "Distance_from_Customer_house": "4.0",
        "Offers": "Flat 10% OFF",
        "alchol": true,
        "Restaurant_open_time": 11,
        "Restaurant_close_time": 23
    },
    {
        "image": "tenth",
        "name": "Town Table",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": "2000 for two",
        "locations": "Clock Tower",
        "Distance_from_Customer_house": "3.0",
        "Offers": "Flat 10% OFF",
        "alchol": false,
        "Restaurant_open_time": 18,
        "Restaurant_close_time": 6
    },
    {
        "image": "second",
        "name": "Muse Restobar",
        "rating": 5,
        "food_type": "Mughlai",
        "price_for_two": "2000 for two",
        "locations": "Mall Road",
        "Distance_from_Customer_house": "6.0",
        "Offers": "Flat 15% OFF",
        "alchol": false,
        "Restaurant_open_time": 13,
        "Restaurant_close_time": 1
    },
    {
        "image": "sixth",
        "name": "Y Cafe & Restaurant",
        "rating": 4,
        "food_type": "South Indian",
        "price_for_two": "2000 for two",
        "locations": "Astley Hall",
        "Distance_from_Customer_house": "1.0",
        "Offers": "Flat 10% OFF",
        "alchol": false,
        "Restaurant_open_time": 14,
        "Restaurant_close_time": 2
    },
    {
        "image": "sixth",
        "name": "Kalsang Friends Corner",
        "rating": 2,
        "food_type": "Mughlai",
        "price_for_two": "2000 for two",
        "locations": "Astley Hall",
        "Distance_from_Customer_house": "5.0",
        "Offers": "Flat 10% OFF",
        "alchol": true,
        "Restaurant_open_time": 6,
        "Restaurant_close_time": 18
    },
    {
        "image": "tenth",
        "name": "Black Pepper",
        "rating": 1,
        "food_type": "South Indian",
        "price_for_two": "2000 for two",
        "locations": "Ballupur",
        "Distance_from_Customer_house": "4.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 15,
        "Restaurant_close_time": 3
    },
    {
        "image": "tenth",
        "name": "Muse Restobar",
        "rating": 4,
        "food_type": "Street Food",
        "price_for_two": "2000 for two",
        "locations": "Clock Tower",
        "Distance_from_Customer_house": "5.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 23,
        "Restaurant_close_time": 11
    },
    {
        "image": "seventh",
        "name": "Anandam",
        "rating": 4,
        "food_type": "South Indian",
        "price_for_two": "2000 for two",
        "locations": "Paltan Bazaar",
        "Distance_from_Customer_house": "4.0",
        "Offers": "Flat 15% OFF",
        "alchol": false,
        "Restaurant_open_time": 13,
        "Restaurant_close_time": 1
    },
    {
        "image": "third",
        "name": "Kalsang Friends Corner",
        "rating": 1,
        "food_type": "Street Food",
        "price_for_two": "2000 for two",
        "locations": "Ballupur",
        "Distance_from_Customer_house": "5.0",
        "Offers": "Flat 10% OFF",
        "alchol": true,
        "Restaurant_open_time": 13,
        "Restaurant_close_time": 1
    },
    {
        "image": "first",
        "name": "Kalsang AMA Cafe",
        "rating": 2,
        "food_type": "North Indian",
        "price_for_two": "2000 for two",
        "locations": "Pacific Mall",
        "Distance_from_Customer_house": "4.0",
        "Offers": "",
        "alchol": true,
        "Restaurant_open_time": 14,
        "Restaurant_close_time": 2
    },
    {
        "image": "ninth",
        "name": "Punjab Grill",
        "rating": 2,
        "food_type": "Street Food",
        "price_for_two": "2000 for two",
        "locations": "Rajpur Road",
        "Distance_from_Customer_house": "7.0",
        "Offers": "Flat 15% OFF",
        "alchol": false,
        "Restaurant_open_time": 23,
        "Restaurant_close_time": 11
    },
    {
        "image": "fifth",
        "name": "Anandam",
        "rating": 5,
        "food_type": "Mexican",
        "price_for_two": "2000 for two",
        "locations": "Rajpur Road",
        "Distance_from_Customer_house": "4.0",
        "Offers": "Flat 10% OFF",
        "alchol": false,
        "Restaurant_open_time": 17,
        "Restaurant_close_time": 5
    },
    {
        "image": "second",
        "name": "The Great Indian Pub",
        "rating": 2,
        "food_type": "Continental",
        "price_for_two": "2000 for two",
        "locations": "Pacific Mall",
        "Distance_from_Customer_house": "3.0",
        "Offers": "Flat 15% OFF",
        "alchol": false,
        "Restaurant_open_time": 15,
        "Restaurant_close_time": 3
    },
   {
    "image": "fifth",
    "name": "Town Table",
    "rating": 4,
    "food_type": "Continental",
    "price_for_two": "1000 for two",
    "locations": "Mall Road",
    "Distance_from_Customer_house": "4.0",
    "Offers": "Flat 10% OFF",
    "alchol": false,
    "Restaurant_open_time": 10,
    "Restaurant_close_time": 22
},
{
    "image": "ninth",
    "name": "Black Pepper",
    "rating": 3,
    "food_type": "Mughlai",
    "price_for_two": "1000 for two",
    "locations": "Hathibarkala",
    "Distance_from_Customer_house": "1.0",
    "Offers": "Flat 10% OFF",
    "alchol": false,
    "Restaurant_open_time": 11,
    "Restaurant_close_time": 23
},
{
    "image": "ninth",
    "name": "Anandam",
    "rating": 2,
    "food_type": "North Indian",
    "price_for_two": "1000 for two",
    "locations": "Rajpur Road",
    "Distance_from_Customer_house": "7.0",
    "Offers": "Flat 10% OFF",
    "alchol": false,
    "Restaurant_open_time": 19,
    "Restaurant_close_time": 7
},
{
    "image": "first",
    "name": "Kalsang Friends Corner",
    "rating": 3,
    "food_type": "Thai",
    "price_for_two": "1000 for two",
    "locations": "Ballupur",
    "Distance_from_Customer_house": "2.0",
    "Offers": "Flat 10% OFF",
    "alchol": true,
    "Restaurant_open_time": 22,
    "Restaurant_close_time": 10
},
{
    "image": "first",
    "name": "Punjab Grill",
    "rating": 2,
    "food_type": "Thai",
    "price_for_two": "1000 for two",
    "locations": "Clock Tower",
    "Distance_from_Customer_house": "4.0",
    "Offers": "Flat 15% OFF",
    "alchol": false,
    "Restaurant_open_time": 14,
    "Restaurant_close_time": 2
},
{
    "image": "fourth",
    "name": "Orchard",
    "rating": 2,
    "food_type": "Chinese",
    "price_for_two": "1000 for two",
    "locations": "Clock Tower",
    "Distance_from_Customer_house": "5.0",
    "Offers": "",
    "alchol": false,
    "Restaurant_open_time": 16,
    "Restaurant_close_time": 4
},
{
    "image": "second",
    "name": "Orchard",
    "rating": 1,
    "food_type": "Indian",
    "price_for_two": "1000 for two",
    "locations": "Pacific Mall",
    "Distance_from_Customer_house": "6.0",
    "Offers": "",
    "alchol": false,
    "Restaurant_open_time": 22,
    "Restaurant_close_time": 10
},
{
    "image": "third",
    "name": "Anandam",
    "rating": 3,
    "food_type": "Indian",
    "price_for_two": "1000 for two",
    "locations": "Clock Tower",
    "Distance_from_Customer_house": "1.0",
    "Offers": "",
    "alchol": false,
    "Restaurant_open_time": 18,
    "Restaurant_close_time": 6
},
{
    "image": "fifth",
    "name": "Y Cafe & Restaurant",
    "rating": 3,
    "food_type": "Indian",
    "price_for_two": "1000 for two",
    "locations": "Clock Tower",
    "Distance_from_Customer_house": "5.0",
    "Offers": "",
    "alchol": false,
    "Restaurant_open_time": 0,
    "Restaurant_close_time": 12
},
{
    "image": "eight",
    "name": "Anandam",
    "rating": 1,
    "food_type": "Mexican",
    "price_for_two": "1000 for two",
    "locations": "Jakhan",
    "Distance_from_Customer_house": "4.0",
    "Offers": "",
    "alchol": false,
    "Restaurant_open_time": 17,
    "Restaurant_close_time": 5
},
    {
        "image": "seventh",
        "name": "Anandam",
        "rating": 2,
        "food_type": "North Indian",
        "price_for_two": "2000 for two",
        "locations": "Clock Tower",
        "Distance_from_Customer_house": "4.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 21,
        "Restaurant_close_time": 9
    },
    {
        "image": "fourth",
        "name": "Town Table",
        "rating": 5,
        "food_type": "Chinese",
        "price_for_two": "2000 for two",
        "locations": "Mall Road",
        "Distance_from_Customer_house": "4.0",
        "Offers": "",
        "alchol": true,
        "Restaurant_open_time": 20,
        "Restaurant_close_time": 8
    },
    {
        "image": "ninth",
        "name": "Punjab Grill",
        "rating": 3,
        "food_type": "South Indian",
        "price_for_two": "2000 for two",
        "locations": "Pacific Mall",
        "Distance_from_Customer_house": "3.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 0,
        "Restaurant_close_time": 12
    },
    {
        "image": "fifth",
        "name": "Punjab Grill",
        "rating": 1,
        "food_type": "Mexican",
        "price_for_two": "2000 for two",
        "locations": "Jakhan",
        "Distance_from_Customer_house": "5.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 15,
        "Restaurant_close_time": 3
    },
    {
        "image": "first",
        "name": "Anandam",
        "rating": 5,
        "food_type": "Continental",
        "price_for_two": "2000 for two",
        "locations": "Mall Road",
        "Distance_from_Customer_house": "1.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 21,
        "Restaurant_close_time": 9
    },
    {
        "image": "sixth",
        "name": "Black Pepper",
        "rating": 2,
        "food_type": "North Indian",
        "price_for_two": "2500 for two",
        "locations": "Hathibarkala",
        "Distance_from_Customer_house": "2.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 13,
        "Restaurant_close_time": 1
    },
    {
        "image": "eight",
        "name": "Muse Restobar",
        "rating": 3,
        "food_type": "North Indian",
        "price_for_two": "2500 for two",
        "locations": "Mall Road",
        "Distance_from_Customer_house": "1.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 18,
        "Restaurant_close_time": 6
    },
    {
        "image": "fourth",
        "name": "Kalsang Friends Corner",
        "rating": 5,
        "food_type": "Italian",
        "price_for_two": "2500 for two",
        "locations": "Jakhan",
        "Distance_from_Customer_house": "4.0",
        "Offers": "Flat 10% OFF",
        "alchol": true,
        "Restaurant_open_time": 16,
        "Restaurant_close_time": 4
    },
    {
        "image": "fifth",
        "name": "Kalsang AMA Cafe",
        "rating": 2,
        "food_type": "Mughlai",
        "price_for_two": "2500 for two",
        "locations": "Paltan Bazaar",
        "Distance_from_Customer_house": "2.0",
        "Offers": "Flat 10% OFF",
        "alchol": false,
        "Restaurant_open_time": 0,
        "Restaurant_close_time": 12
    },
    {
        "image": "tenth",
        "name": "Kalsang AMA Cafe",
        "rating": 4,
        "food_type": "Thai",
        "price_for_two": "2500 for two",
        "locations": "Pacific Mall",
        "Distance_from_Customer_house": "7.0",
        "Offers": "Flat 10% OFF",
        "alchol": true,
        "Restaurant_open_time": 2,
        "Restaurant_close_time": 14
    },
    {
        "image": "second",
        "name": "Punjab Grill",
        "rating": 5,
        "food_type": "South Indian",
        "price_for_two": "2500 for two",
        "locations": "Mall Road",
        "Distance_from_Customer_house": "4.0",
        "Offers": "Flat 10% OFF",
        "alchol": false,
        "Restaurant_open_time": 10,
        "Restaurant_close_time": 22
    },
    {
        "image": "seventh",
        "name": "Y Cafe & Restaurant",
        "rating": 5,
        "food_type": "Street Food",
        "price_for_two": "2000 for two",
        "locations": "Clock Tower",
        "Distance_from_Customer_house": "5.0",
        "Offers": "Flat 10% OFF",
        "alchol": false,
        "Restaurant_open_time": 0,
        "Restaurant_close_time": 12
    },
    {
        "image": "eight",
        "name": "Y Cafe & Restaurant",
        "rating": 5,
        "food_type": "Continental",
        "price_for_two": "2000 for two",
        "locations": "Clock Tower",
        "Distance_from_Customer_house": "4.0",
        "Offers": "Flat 10% OFF",
        "alchol": false,
        "Restaurant_open_time": 6,
        "Restaurant_close_time": 18
    },
    {
        "image": "tenth",
        "name": "Punjab Grill",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": "2000 for two",
        "locations": "Rajpur Road",
        "Distance_from_Customer_house": "1.0",
        "Offers": "Flat 10% OFF",
        "alchol": true,
        "Restaurant_open_time": 0,
        "Restaurant_close_time": 12
    },
    {
        "image": "eight",
        "name": "Kalsang AMA Cafe",
        "rating": 3,
        "food_type": "Mexican",
        "price_for_two": "2000 for two",
        "locations": "Paltan Bazaar",
        "Distance_from_Customer_house": "1.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 4,
        "Restaurant_close_time": 16
    },
    {
        "image": "fifth",
        "name": "Town Table",
        "rating": 3,
        "food_type": "North Indian",
        "price_for_two": "2000 for two",
        "locations": "Jakhan",
        "Distance_from_Customer_house": "5.0",
        "Offers": "",
        "alchol": true,
        "Restaurant_open_time": 22,
        "Restaurant_close_time": 10
    },
    {
        "image": "first",
        "name": "Anandam",
        "rating": 2,
        "food_type": "Indian",
        "price_for_two": "2000 for two",
        "locations": "Clock Tower",
        "Distance_from_Customer_house": "4.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 7,
        "Restaurant_close_time": 19
    },
    {
        "image": "eight",
        "name": "The Great Indian Pub",
        "rating": 4,
        "food_type": "Mughlai",
        "price_for_two": "2000 for two",
        "locations": "Paltan Bazaar",
        "Distance_from_Customer_house": "1.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 19,
        "Restaurant_close_time": 7
    },
    {
        "image": "first",
        "name": "Y Cafe & Restaurant",
        "rating": 5,
        "food_type": "Italian",
        "price_for_two": "2000 for two",
        "locations": "Mall Road",
        "Distance_from_Customer_house": "3.0",
        "Offers": "",
        "alchol": true,
        "Restaurant_open_time": 3,
        "Restaurant_close_time": 15
    },
    {
        "image": "sixth",
        "name": "Town Table",
        "rating": 5,
        "food_type": "Indian",
        "price_for_two": "2000 for two",
        "locations": "Hathibarkala",
        "Distance_from_Customer_house": "7.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 9,
        "Restaurant_close_time": 21
    },
    {
        "image": "tenth",
        "name": "Kalsang Friends Corner",
        "rating": 2,
        "food_type": "Indian",
        "price_for_two": "2000 for two",
        "locations": "Ballupur",
        "Distance_from_Customer_house": "3.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 5,
        "Restaurant_close_time": 17
    },
    {
        "image": "tenth",
        "name": "Orchard",
        "rating": 3,
        "food_type": "Chinese",
        "price_for_two": "2000 for two",
        "locations": "Mall Road",
        "Distance_from_Customer_house": "1.0",
        "Offers": "",
        "alchol": true,
        "Restaurant_open_time": 23,
        "Restaurant_close_time": 11
    },
    {
        "image": "fourth",
        "name": "Kalsang Friends Corner",
        "rating": 3,
        "food_type": "Continental",
        "price_for_two": "2000 for two",
        "locations": "Ballupur",
        "Distance_from_Customer_house": "1.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 11,
        "Restaurant_close_time": 23
    },
    {
        "image": "sixth",
        "name": "Orchard",
        "rating": 1,
        "food_type": "Italian",
        "price_for_two": "2000 for two",
        "locations": "Hathibarkala",
        "Distance_from_Customer_house": "1.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 5,
        "Restaurant_close_time": 17
    },
    {
        "image": "ninth",
        "name": "Muse Restobar",
        "rating": 3,
        "food_type": "Mughlai",
        "price_for_two": "2000 for two",
        "locations": "Rajpur",
        "Distance_from_Customer_house": "7.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 15,
        "Restaurant_close_time": 3
    },
    {
        "image": "ninth",
        "name": "Kalsang Friends Corner",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": "2000 for two",
        "locations": "Paltan Bazaar",
        "Distance_from_Customer_house": "6.0",
        "Offers": "",
        "alchol": true,
        "Restaurant_open_time": 15,
        "Restaurant_close_time": 3
    },
    {
        "image": "seventh",
        "name": "Kalsang AMA Cafe",
        "rating": 4,
        "food_type": "Thai",
        "price_for_two": "2000 for two",
        "locations": "Hathibarkala",
        "Distance_from_Customer_house": "5.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 22,
        "Restaurant_close_time": 10
    },
    {
        "image": "eight",
        "name": "Muse Restobar",
        "rating": 4,
        "food_type": "Chinese",
        "price_for_two": "2000 for two",
        "locations": "Astley Hall",
        "Distance_from_Customer_house": "1.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 14,
        "Restaurant_close_time": 2
    },
    {
        "image": "fifth",
        "name": "Anandam",
        "rating": 3,
        "food_type": "Chinese",
        "price_for_two": "2000 for two",
        "locations": "Rajpur Road",
        "Distance_from_Customer_house": "4.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 4,
        "Restaurant_close_time": 16
    },
    {
        "image": "fifth",
        "name": "Black Pepper",
        "rating": 4,
        "food_type": "Indian",
        "price_for_two": "2000 for two",
        "locations": "Rajpur",
        "Distance_from_Customer_house": "3.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 5,
        "Restaurant_close_time": 17
    },
    {
        "image": "fifth",
        "name": "Orchard",
        "rating": 5,
        "food_type": "South Indian",
        "price_for_two": "2000 for two",
        "locations": "Paltan Bazaar",
        "Distance_from_Customer_house": "2.0",
        "Offers": "",
        "alchol": true,
        "Restaurant_open_time": 3,
        "Restaurant_close_time": 15
    },
    {
        "image": "second",
        "name": "Orchard",
        "rating": 5,
        "food_type": "North Indian",
        "price_for_two": "2000 for two",
        "locations": "Paltan Bazaar",
        "Distance_from_Customer_house": "1.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 18,
        "Restaurant_close_time": 6
    },
    {
        "image": "fourth",
        "name": "Orchard",
        "rating": 2,
        "food_type": "South Indian",
        "price_for_two": "2000 for two",
        "locations": "Pacific Mall",
        "Distance_from_Customer_house": "4.0",
        "Offers": "",
        "alchol": true,
        "Restaurant_open_time": 6,
        "Restaurant_close_time": 18
    },
    {
        "image": "tenth",
        "name": "Black Pepper",
        "rating": 1,
        "food_type": "Italian",
        "price_for_two": "2000 for two",
        "locations": "Mall Road",
        "Distance_from_Customer_house": "6.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 19,
        "Restaurant_close_time": 7
    },
    {
        "image": "fourth",
        "name": "Y Cafe & Restaurant",
        "rating": 4,
        "food_type": "Mughlai",
        "price_for_two": "2000 for two",
        "locations": "Mall Road",
        "Distance_from_Customer_house": "6.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 15,
        "Restaurant_close_time": 3
    },
    {
        "image": "sixth",
        "name": "Black Pepper",
        "rating": 2,
        "food_type": "Indian",
        "price_for_two": "2000 for two",
        "locations": "Clock Tower",
        "Distance_from_Customer_house": "7.0",
        "Offers": "",
        "alchol": false,
        "Restaurant_open_time": 4,
        "Restaurant_close_time": 16
    },
    {
        "image": "tenth",
        "name": "Town Table",
        "rating": 5,
        "food_type": "Thai",
        "price_for_two": "2000 for two",
        "locations": "Pacific Mall",
        "Distance_from_Customer_house": "6.0",
        "Offers": "",
        "alchol": true,
        "Restaurant_open_time": 7,
        "Restaurant_close_time": 19
    },
    {
        "image": "second",
        "name": "Punjab Grill",
        "rating": 4,
        "food_type": "North Indian",
        "price_for_two": "2000 for two",
        "locations": "Paltan Bazaar",
        "Distance_from_Customer_house": "3.0",
        "Offers": "",
        "alchol": true,
        "Restaurant_open_time": 12,
        "Restaurant_close_time": 0
    },
    {
        "image": "tenth",
        "name": "Town Table",
        "rating": 1,
        "food_type": "Continental",
        "price_for_two": "2000 for two",
        "locations": "Pacific Mall",
        "Distance_from_Customer_house": "2.0",
        "Offers": "",
        "alchol": true,
        "Restaurant_open_time": 20,
        "Restaurant_close_time": 8
    }
]

        // <!-------------------------------Header Section-------------------------------->

        const element= document.getElementsByClassName("container")[0]
        const header= document.createElement("header")
        header.classList.add("header");

        const h1= document.createElement("h1")
        h1.classList.add("title");
        h1.textContent="Feastly";

        const p= document.createElement("p")
        p.classList.add("subtitle");
        p.textContent="Explore curated lists of top restaurants, cafes, pubs, and bars in Dehradun, based on trends";

        header.appendChild(h1);
        header.appendChild(p);
        element.insertBefore(header, element.firstChild); // takii sbse phele rhe ye top pe
        //    its like header attach krna hai kha krna hai element   ke firstchild pr


        // <!-------------------------------Header Section-------------------------------->



        // <!-------------------------------Collections Grid-------------------------------->
       
        // const section=document.createElement("section");
        //  section.classList.add("collections");
        // for(let i=0 ; i<4; i++){
       

        // const div= document.createElement("div");
        // div.classList.add("collection-card");
        // div.classList.add("cafe-card");

        // const div1= document.createElement("div");
        // div1.classList.add("card-image");

        // const div2= document.createElement("div");
        // div2.classList.add("cafe-icon");
        // const img1=document.createElement("img");
        // img1.src="./pictures/one.jpeg" 

        // img1.width="380"
        // img1.height="270"

        // div2.appendChild(img1);
        // div1.appendChild(div2);
        // div.appendChild(div1);


        // const div3=document.createElement("div");
        // div3.classList.add("card-content")
        // const h3= document.createElement("h3");
        // h3.textContent="Great Cafes";
        // const p1= document.createElement("p")
        // p1.textContent="58 Places";

        // div3.appendChild(h3);
        // div3.appendChild(p1);
        // div.appendChild(div3);

        // section.appendChild(div);
       
       
        
        // }

        //  element.insertBefore(section, header.nextSibling);  // taakii ye humesha header ke baad dikhe
        // //    its like section attach krna hai kha krna hai header ke nextsibling pr


const section = document.createElement("section");
section.classList.add("collections");

const cardData = [
  {
    imgSrc: "./pictures/one.jpeg",
    title: "Great Cafes",
    places: "58 Places"
  },
  {
    imgSrc: "./pictures/two.jpeg",
    title: "Street Foods",
    places: "43 Places"
  },
  {
    imgSrc: "./pictures/three.jpeg",
    title: "Fine Dining",
    places: "29 Places"
  },
  {
    imgSrc: "./pictures/four.jpeg",
    title: "Trending Spots",
    places: "75 Places"
  }
];

cardData.forEach(card => {
  const div = document.createElement("div");
  div.classList.add("collection-card", "cafe-card");

  const div1 = document.createElement("div");
  div1.classList.add("card-image");

  const div2 = document.createElement("div");
  div2.classList.add("cafe-icon");

  const img = document.createElement("img");
  img.src = card.imgSrc;
  img.alt = card.title;
  img.width = 380;
  img.height = 270;

  div2.appendChild(img);
  div1.appendChild(div2);
  div.appendChild(div1);

  const div3 = document.createElement("div");
  div3.classList.add("card-content");

  const h3 = document.createElement("h3");
  h3.textContent = card.title;

  const p1 = document.createElement("p");
  p1.textContent = card.places;

  div3.appendChild(h3);
  div3.appendChild(p1);
  div.appendChild(div3);

  section.appendChild(div);
});

element.insertBefore(section, header.nextSibling);

        // <!-------------------------------Collections Grid-------------------------------->



 
        // <!-------------------------------Best Food Section-------------------------------->


        // const section2=document.createElement("section");
        // section2.classList.add("best-food")
        const bestfood=document.createElement("h2");
        bestfood.textContent="Best Food in Dehradun"

        // section2.appendChild(bestfood);

        const div4=document.createElement("div");
        div4.classList.add("restaurant-grid");


        // function to call 

        function getrestaurant(restaurants){
            restaurants.forEach(restaurant => {

                
                       //  create a card
                
                const card=document.createElement("div");
                card.classList.add("restaurant-card");


                // imageWrapper 
                const imageWrapper = document.createElement("div");
                imageWrapper.classList.add("restaurant-image-wrapper");

                //  card img
                const rimg=document.createElement("img");
                rimg.src=`./pictures/${restaurant.image}.jpeg` 

                rimg.width="300"
                rimg.height="180"

                // flat % OFF
                const flat=document.createElement("div");
                flat.classList.add("discount-badge");
                flat.textContent=`${restaurant.Offers}`;
           // to hide the discount badge from those cards jinpe offers nhi hai
                if (flat.textContent.trim() === "") {
                flat.style.display = "none";
                 }
              



                // card-content
                const cardcontent=document.createElement("div");
                cardcontent.classList.add("cardcontent")

                // card-content-header (name-rating)
                const cardcontentheader=document.createElement("div"); 
                cardcontentheader.classList.add("cardcontentheader")


                   // restaurant-name
                   const restaurantname= document.createElement("div");
                   restaurantname.classList.add("rname");
                   restaurantname.textContent=`${restaurant.name}`


               
                
                   // restaurant-rating
                   const restaurantrating= document.createElement("div");
                   restaurantrating.classList.add("restaurantrating")
                   restaurantrating.textContent=`${restaurant.rating}⭐`

                // card-content-header (name-rating)
                cardcontentheader.appendChild(restaurantname);
                cardcontentheader.appendChild(restaurantrating);




                // card-content-middle (foodtype-pricefortwo)
                const cardcontentmiddle=document.createElement("div");
                cardcontentmiddle.classList.add("cardcontentmiddle");



                   // restaurant-foodtype
                   const restaurantfoodtype= document.createElement("div");
                   restaurantfoodtype.classList.add("restaurantfoodtype");
                   restaurantfoodtype.textContent=`${restaurant.food_type}`;
                   
               
                
                   // restaurant-pricefortwo
                   const restaurantpricefortwo= document.createElement("div");
                   restaurantpricefortwo.classList.add("restaurantpricefortwo");
                   restaurantpricefortwo.textContent=`${restaurant.price_for_two}`;


                // card-content-middle (foodtype-pricefortwo)
                cardcontentmiddle.appendChild(restaurantfoodtype);
                cardcontentmiddle.appendChild(restaurantpricefortwo);
                   
                   


                // card-content-footer (location-distance)
                const cardcontentfooter=document.createElement("div"); 
                cardcontentfooter.classList.add("cardcontentfooter");

                   // restaurant-location
                   const restaurantlocation= document.createElement("div");
                   restaurantlocation.classList.add("restaurantlocation");
                   restaurantlocation.textContent=`${restaurant.locations}`;
               
                
                   // restaurant-distance
                   const restaurantdistance= document.createElement("div"); 
                   restaurantdistance.classList.add("restaurantdistance");  
                   restaurantdistance.textContent=`${restaurant.Distance_from_Customer_house}`;           


                // card-content-footer (location-distance)
                cardcontentfooter.appendChild(restaurantlocation);
                cardcontentfooter.appendChild(restaurantdistance);

                
                //    cardcontent is ready :
                cardcontent.appendChild(cardcontentheader);
                cardcontent.appendChild(cardcontentmiddle);
                cardcontent.appendChild(cardcontentfooter);


                // Append both to wrapper
                imageWrapper.appendChild(rimg);
                imageWrapper.appendChild(flat);


                // full card ready:
                card.appendChild(imageWrapper);
                card.appendChild(cardcontent);

                //  div4 me daala card
                div4.appendChild(card);


                // and section me daala div 4
                // section2.appendChild(div4);


                // section2 ko element me add krna
                // element.appendChild(section2)
                element.appendChild(div4)


                
            });

        

        }


        getrestaurant(restaurants);
        // <!-------------------------------Best Food Section-------------------------------->



        // <!-------------------------------Filters button-------------------------------->

        const filter_button=document.querySelectorAll(".filter-btn");
        filter_button.forEach(button=>{
            button.addEventListener("click",()=>{
                const b_name=button.textContent.trim();
                
              if (b_name==="Filters") {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.filter-card').style.display = 'block';
    
    document.querySelector('.apply-btn').addEventListener('click',()=>{
        const element = document.querySelector('input[name="filter"]:checked');
        const answer = element.value;
        
        if(answer==="rating"){  // high to low rating 
            restaurants.sort((a,b)=>b.rating-a.rating); 
        } 
        else if(answer==="highLow"){ // high price for two to low price for two
            restaurants.sort((a,b)=>parseInt(b.price_for_two)-parseInt(a.price_for_two)); 
        } 
        else if(answer==="costLowHigh"){ // low price for two to high price for two 
            restaurants.sort((a,b)=>parseInt(a.price_for_two)-parseInt(b.price_for_two)); 
        } 
        else if(answer==="distance"){ // less distance to high distance
            restaurants.sort((a,b)=>parseFloat(a.Distance_from_Customer_house)-parseFloat(b.Distance_from_Customer_house)); 
        } 

        div4.innerHTML = "";
        document.querySelector('.filter-card').style.display = 'none';
        document.querySelector('.overlay').style.display = 'none';
        getrestaurant(restaurants);
    });
    
    document.querySelector('.close-btn').addEventListener('click',()=>{
        document.querySelector('.filter-card').style.display = 'none';
        document.querySelector('.overlay').style.display = 'none';
    });
}

                else if(b_name==="Offers"){
                    // Filter only those restaurants which has rating of 4.3+
                    const scheme=restaurants.filter(obj=>obj.Offers);

                    // clearing all the previous cards   
              div4.innerHTML=""

                    getrestaurant(scheme);




                }

                else if(b_name==="Rating 3+"){
                     // Filter only those restaurants which has rating of 4.3+
                     const rate=restaurants.filter(obj=>obj.rating>3);

                     
                  // clearing all the previous cards   
              div4.innerHTML=""

                    getrestaurant(rate);



                    
                }

                else if(b_name==="Open Now"){

                    // Step 1: Get the current hour (0-23 format)
    // Like if it's 2:30 PM, currentHour will be 14
    const now = new Date();
    const currentHour = now.getHours();
    
    // console.log("Current hour:", currentHour); // Debug: see what time it is
    
    // Step 2: Filter restaurants that are currently open
    const openRestaurants = restaurants.filter(restaurant => {
        const openTime = restaurant.Restaurant_open_time;
        const closeTime = restaurant.Restaurant_close_time;
        
        // Step 3: Check if restaurant is open right now
        // We have 2 scenarios to handle:
        
        if (openTime < closeTime) {
            // SCENARIO 1: Normal hours (like 9 AM to 6 PM)
            // Example: opens at 9 (openTime=9), closes at 18 (closeTime=18)
            // Restaurant is open if: 9 ≤ currentHour < 18
            
            return currentHour >= openTime && currentHour < closeTime;
            
        } else {
            // SCENARIO 2: Crosses midnight (like 9 PM to 6 AM next day)
            // Example: opens at 21 (openTime=21), closes at 6 (closeTime=6)
            // Restaurant is open if: 
            // - currentHour ≥ 21 (after 9 PM today) OR
            // - currentHour < 6 (before 6 AM tomorrow)
            
            return currentHour >= openTime || currentHour < closeTime;
        }
    });
    
    // console.log("Open restaurants found:", openRestaurants.length); // Debug info
    
    // Step 4: Clear previous cards and show only open restaurants
    div4.innerHTML = "";
    
    // Step 5: Display the filtered restaurants
    getrestaurant(openRestaurants);
                    

                    
                }

                else if(b_name==="Serves Alcohol"){
                    // Filter only those restaurants which serve alcohol
                    const alcohol=restaurants.filter(obj=>obj.alchol===true);

                  // clearing all the previous cards   
              div4.innerHTML=""

                    getrestaurant(alcohol);

                    
                }

                
                    
                
            })
        })



        // <!-------------------------------Filters button-------------------------------->