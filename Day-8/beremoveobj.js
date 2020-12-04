Array.prototype.beremoveobject = function (key, value) {
    this.map((object) => {
      if (object[key] === value) {
        delete object[key];
      }
    });
    return this;
  };
  
  var sampleinput = [
    { name: "John", age: 26, Country: "india" },
    { name: "Siva", age: 30, Country: "india" },
  ];
  
  console.log(sampleinput.beremoveobject("Country", "india"));
  