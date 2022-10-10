var kuch = [];
var Hello = function (b) {
    for (var i = 0; i <= b.length - 1; i++) {
        console.log(b[i]);
        kuch.push(b[i]);
    }
    console.log(kuch);
};
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Hello(a);
