console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];
let album;
/* Is it more efficient to declare album in the function and create a secondary
global variable to return album's value to, or just create a global variable at the outset? */

function addToCollection(collection, title, artist, yearPublished) {
  album = {
    'title': title,
    'artist': artist,
    'yearPublished': yearPublished,
    //Why do the keys have to be lowercase for the test to work?
  };
  collection.push(album);
  return album;
}

function showCollection(collection) {
  for (let i = 0; i < collection.length; i++) {
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
  }
  ;
}
function findByArtist(collection, artist) {
  let artistFinder = [];
  for (let collectionItem of collection) {
    if (collectionItem.artist === artist) {
      artistFinder.push(collectionItem);
    }
  } 
  return artistFinder; //where to put the return tripped me up for a second.
}

addToCollection(myCollection, "Sam's Town", "The Killers", 2006);
console.log(album);
addToCollection(myCollection, "Because the Internet", "Childish Gambino", 2013);
console.log(album);
addToCollection(myCollection, "Tallahassee", "The Mountain Goats", 2002);
console.log(album);
addToCollection(myCollection, "Studio Killers", "Studio Killers", 2013);
console.log(album);
addToCollection(myCollection, "The Thrill of It All", "Sam Smith", 2017);
console.log(album);
addToCollection(myCollection, "Screen Violence", "CHVRCHES", 2021);
console.log(album);
console.log(myCollection);

showCollection(myCollection);

findByArtist(myCollection, "Sam Smith");
console.log(findByArtist(myCollection, "Sam Smith"));
findByArtist(myCollection, "Prince");
console.log(findByArtist(myCollection, "Prince"));











// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
