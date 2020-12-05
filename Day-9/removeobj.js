Array.prototype.beremoveobject = function() {
    return this.reduce(function(accumulator, current) {
        if (accumulator.indexOf(current) < 0) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);
}
  
  var sampleinput = [1,2,4,5,2,5];
  
  console.log(sampleinput.beremoveobject());