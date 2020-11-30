for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " bestenlistreact");
    }
    else if (i % 3 === 0) {
        console.log(i + " bestenlist");
    }
    else if (i % 5 === 0) {
        console.log(i + " react");
    }
    else {
        console.log(i);
    }
}