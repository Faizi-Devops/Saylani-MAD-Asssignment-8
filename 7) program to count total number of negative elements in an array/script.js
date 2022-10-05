var count = 0;
var Hello = function (b) {
    for (var i = 0; i <= b.length - 1; i++) {
        if (b[i] < 0) {
            count = count + 1;
        }
    }
    console.log("The total negative number of arrays are ".concat(count));
};
var a = [-1, -2, -4, 5, 6, -7, 8, 40, -50, -60, -20];
Hello(a);
