let points = 10;

// Write Your Code Here
points += ++points.toString().length;
console.log(points); // Output => 13

// Write Your Code Here
points -= ++points.toString().length + points.toString().length;
console.log(points); // Output => 8
