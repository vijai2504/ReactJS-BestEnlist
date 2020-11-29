function seclar(arr){
    var max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    return Math.max.apply(null, arr);
};
console.log(seclar([20, 120, 111, 215, 54, 78]));
