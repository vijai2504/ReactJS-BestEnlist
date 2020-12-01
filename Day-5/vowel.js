function Vowel(str) {
    this.str = str;
}

Vowel.prototype.beVowel = function () {
    var res = '';
    for (let i = 0; i < this.str.length; i++) {
        if (this.str[i] === 'a' || this.str[i] === 'e' || 
        this.str[i] === 'i' || this.str[i] === 'o' || 
        this.str[i] === 'u' || this.str[i] === 'A' || 
        this.str[i] === 'E' || this.str[i] === 'I' || 
        this.str[i] === 'O' || this.str[i] === 'U') {
            res += this.str[i];
        }
    }
    console.log(res);
}

let str1 = new Vowel("hello");
let str2 = new Vowel("best enlist");
str1.beVowel();
str2.beVowel();