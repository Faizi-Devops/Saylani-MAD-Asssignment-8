var even = 0;
var odd = 0;
var Hello = function (b) {
    for (var i = 0; i <= b.length - 1; i++) {
        if (b[i] % 2 == 0) {
            even = even + 1;
        }
        else {
            odd = odd + 1;
        }
    }
    console.log("The total number of even are ".concat(even));
    console.log("The total number of odd are ".concat(odd));
};
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Hello(a);
