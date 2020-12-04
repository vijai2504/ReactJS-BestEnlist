  
Array.prototype.beaddobject = function (key, value) {
    this.map((object) => {
        object[key] = value;
    });
    return this;
}

var sampleinput = [
    { name: "John", age: 26 },
    { name: "Siva", age: 30 },
];

console.log(sampleinput.beaddobject("Country", "India"));