var getObjects = require('./objects');

var user2Object = getObjects();

user2Object.favMovie = "The NoteBook";
console.log("Emily's favorite movie is: " + user2Object.favMovie);

/* this will print "The NoteBook" as the favorite movie for User 2 but not for User 1. */