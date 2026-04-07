// <!-- Data -->
// 1: Restaurant Image
// 2: Restaurant Name
// 3: Rating
// 4: Food_types
// 5: Price_for_two
// 6: Location
// 7: Distance_from_Customer_house
// 8: Offers
// 9: Alchol_serves
// 10: Restaurant_open_time
// 11: Restaurant_close_time


// =========================HOW TO BUILD DATA BY OURSELF ========================================



// const fs = require('fs');
// fs stands for File System, a built-in Node.js module.

// It allows you to read, write, create, update, and delete files on your system.

// require('fs') loads this module so you can use its functions.

const fs= require('fs'); 
const restaurant=[]; 
const images=["first", "second" , "third" , "fourth" , "fifth" , "sixth" , "seventh" , "eight" , "ninth" , "tenth"]
const names = [
  "Orchard",
  "Kalsang AMA Cafe",
  "Y Cafe & Restaurant",
  "Town Table",
  "The Great Indian Pub",
  "Black Pepper",
  "Punjab Grill",
  "Anandam",
  "Muse Restobar",
  "Kalsang Friends Corner"
];
const foodTypes = [
  "Indian",
  "North Indian",
  "South Indian",
  "Chinese",
  "Italian",
  "Mexican",
  "Thai",
  "Continental",
  "Mughlai",
  "Street Food"
];
const pft=["1000","2000","2500"][Math.floor(Math.random() * 3)]
const restaurantLocations = [
  "Rajpur Road",          // Orchard
  "Mall Road",            // Kalsang AMA Cafe
  "Hathibarkala",         // Y Cafe & Restaurant
  "Astley Hall",          // Town Table
  "Jakhan",               // The Great Indian Pub
  "Paltan Bazaar",        // Black Pepper
  "Pacific Mall",         // Punjab Grill
  "Rajpur",               // Anandam
  "Ballupur",             // Muse Restobar
  "Clock Tower",          // Kalsang Friends Corner
];
const offers=["10", "15"][Math.floor(Math.random() * 2)]

// lets say muje 100 cards chaiye webpage pe so, using loop so that i can create 100 data objects

for(let i =0; i<100; i++){
const obj={};

// 1: Restaurant Image:
obj["image"]= images[Math.floor(Math.random() * 10)];
obj["name"]= names[Math.floor(Math.random() * 10)];
obj["rating"]=Math.floor(Math.random() * 5 + 1);
obj["food_type"]=foodTypes[Math.floor(Math.random() * 10)];
obj["price_for_two"]= `${pft} for two`;
obj["locations"]=restaurantLocations[Math.floor(Math.random() * 10)];
obj["Distance_from_Customer_house"]=Math.floor(Math.random() * 7 + 1).toFixed(1);
obj["Offers"]= `Flat ${offers}% OFF`
obj["alchol"]= Math.random()>0.7;
obj["Restaurant_open_time"]= Math.floor(Math.random() * 24);
obj["Restaurant_close_time"]= (obj["Restaurant_open_time"]+ 12)%24 // %24 taki 24 hours me hi wrap rhe 

restaurant.push(obj); // placing all this information inside the array

}
console.log(restaurant);

//  Converting array into JSON format:
// JSON.stringify(array)-----> gives JSON string
const json_data=JSON.stringify(restaurant, null, 4);
fs.writeFileSync('arraydata.json', json_data, 'utf-8');


// restaurant: the array you want to convert.

// null: no custom replacer.

// 2: pretty-prints with 2 spaces indentation for readability.

// This function writes data to a file.

// The Sync part means it’s synchronous — the program will wait until the file is fully written before moving on.

// | Parameter               | Meaning                                                                |
// | ----------------------- | ---------------------------------------------------------------------- |
// | `'restaurantData.json'` | The **file name** to create/write to.                                  |
// | `jsonData`              | The actual **data you want to write** (in your case, the JSON string). |
// | `'utf8'`                | The **character encoding** (standard for text files).                  |
