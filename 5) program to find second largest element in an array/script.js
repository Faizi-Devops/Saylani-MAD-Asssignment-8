var Hello = function (b) {
    var c = b.sort(function (a, b) { return a - b; });
    var d = b[c.length - 2];
    console.log(d);
};
var a = [1, 2, 5, 60, 70, 20, 43, 80, 90];
Hello(a);
