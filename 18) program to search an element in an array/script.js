var Hello = function (b, d) {
    for (var i = 0; i <= b.length - 1; i++) {
        if (d == b[i]) {
            var index = b.indexOf(b[i]);
            console.log("".concat(b[i], " is at the ").concat(index, " position"));
        }
    }
};
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var c = 5;
Hello(a, c);
