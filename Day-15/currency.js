Number.prototype.currency = function(num, comma) {
    var n = this,
        num = isNaN(num = Math.abs(num)) ? 2 : num,
        comma = comma == undefined ? "," : comma,
        sign = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(num)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return sign + (j ? i.substr(0, j) + comma : "") + i.substr(j).replace(/(\d{3})(?=\d)/);
};

var Money=1000;
console.log(fmtMoney = Money.currency(2,','));