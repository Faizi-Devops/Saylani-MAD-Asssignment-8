var even = [];
var odd = [];
var Hello = function (b) {
    for (var i = 0; i <= b.length - 1; i++) {
        if (b[i] % 2 == 0) {
            even.push(b[i]);
        }
        else {
            odd.push(b[i]);
        }
    }
    console.log("Total numbers of even in arrays are ".concat(even));
    console.log("The total numbers of odd in arrays are ".concat(odd));
};
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Hello(a);
