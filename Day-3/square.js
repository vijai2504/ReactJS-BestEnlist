function sqr(n) {
    return +(n.toString().split('').map(i => i * i).join(''));
}
console.log(sqr(222));