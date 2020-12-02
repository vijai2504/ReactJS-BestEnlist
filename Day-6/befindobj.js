var final = [];
Array.prototype.beFindObject = function(name) {
  final.push(name);
}

var initial = [
  {name: "John", age: 26},
  {name: "siva", age: 30}
];

for(let i=0;i<initial.length;i++) {
  initial.beFindObject(initial[i].name);
}

console.log(final);