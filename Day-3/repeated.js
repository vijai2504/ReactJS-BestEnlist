function rep(number) {
    return ((number%10) == Math.floor((number%100)/10));
  }
  console.log(rep(2344)); 
  console.log(rep(52137));