var Hello = function (b) {
    var c = b.sort(function (a, b) { return a - b; });
    console.log(c);
    var d = b.sort(function (a, b) { return b - a; });
    console.log(d);
};
var a = [1, 6, 8, 3, 5, 0, 3];
Hello(a);
