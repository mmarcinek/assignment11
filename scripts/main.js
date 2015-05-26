console.log('This is cool!');

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Person [A] Drives, Person [B] Assists
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 1. Write your own forEach function. It takes the array and the function (referred to as a callback) as arguments:

var people = [
    {name: 'Danny', hometown: 'Augusta'},
    {name: 'Mike', hometown: 'New York'},
    {name: 'Leslie', hometown: 'Atlanta'}
    ];


function forEach(list, callback){
 for(var i = 0; i < list.length; i++){
  callback(list[i]);
 }
};

people.forEach(function(person){
  console.log('Hi, my name is ' + person.name + ', I am from ' + person.hometown + '.');
});

// 2. Write your own map, reduce, and filter functions that use your custom forEach to do their work.

function map(list, callback){
  var newArray = [];
  forEach(list, function(item) {
  newArray.push(callback(item));
};

return newArray;

};

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Person [B] Drives, Person [A] Assists
//////////////////////////////////////////////////
//////////////////////////////////////////////////



// 3. Write a function called pluck that extracts a list of property names:

function pluck(list, propertyName) {
  var items = [];
  for(var i = 0; i < list.length; i++) {
    items.push(list[i],[propertyName]);
  }
  return items;
};

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
pluck(stooges, 'name');
// => ["moe", "larry", "curly"]


// 4. Write a function called find that looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.

function find(list, predicate) { /* Do stuff */ }

var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> 2
