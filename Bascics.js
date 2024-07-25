// var let const difference

// so var is global and function scopr based  a variable  we can access it from anywhere in our file
//  var can be redeclare and reinitialized
{
  var a = 10;
}
var a = 20; // now 20  will print not 10 because we reinitialized it
//  we can access it inside the block scope also

console.log(a);

//  let is block scoped we cannot redeclare it

let a1 = 10;
// let a1 = 20  we cant do that

{
  let b = 20;
}

console.log(b); // we cannot aceess it outside of its scope
