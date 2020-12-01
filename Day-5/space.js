function strOpt(str) {
    this.str = str;
}
strOpt.prototype.bespacify = function () {
    const res = this.str.split('');
    var sp = '';
    for (let i = 0; i < res.length; i++) {
        if (res[i] != ' ')
            sp = sp + res[i] + ' ';
        else
            sp = sp + res[i];
    }
    console.log(sp);
}

let str1 = new strOpt("hello");
let str2 = new strOpt("BestEnlist");
str1.bespacify();
str2.bespacify();