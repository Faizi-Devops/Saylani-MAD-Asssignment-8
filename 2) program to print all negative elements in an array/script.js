var Hello = function (b) {
    for (var i = 0; i <= b.length - 1; i++) {
        var c = b[i];
        if (c < 0) {
            var d = c;
            console.log(d);
        }
    }
};
var a = [1, 2, 3, 4, -5, -96, 56, -90, -60];
Hello(a);
