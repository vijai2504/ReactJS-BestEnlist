var dec = new Date();
var xmas = new Date(dec.getFullYear(),11,25);
if(dec.getDate()>25 && dec.getMonth()==1) {
  xmas.setFullYear(xmas.getFullYear()+1);
}
var nXmas = 1000*60*60*24;
console.log(Math.ceil((xmas.getTime()-dec.getTime())/(nXmas))+ " days left until Christmas");