function signInt(ind, ind1, ind2) {
    var count = 0, max = 0;
    if (ind[0] == "+") {
        alert("+");
        count = 1;
    }
    else if (ind[0] == "-") {
        alert("-");
        max = 1;
    }
    if (ind1[0] == "+" && count != 1) {
        alert("+");
        count = 1;
    }

    else if (ind1[0] == "-" && max != 1) {
        alert("-");
        max = 1;
    }
    if (ind2[0] == "+" && count != 1) {
        alert("+");
        count = 1;
    }

    else if (ind2[0] == "-" && max != 1) {
        alert("-");
        max = 1;
    }
    if (count == 0 && max == 0) {
        alert("welcome");
    }
}
signInt("2", "-1", "+3");