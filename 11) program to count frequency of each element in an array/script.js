var count;
var num;
var c = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var Hello = function (b) {
    for (var i = 0; i <= c.length - 1; i++) {
        count = 0;
        for (var j = 0; j <= b.length - 1; j++) {
            if (c[i] == b[j]) {
                count = count + 1;
                num = c[i];
            }
        }
        console.log("".concat(num, " has ").concat(count, " times"));
    }
};
var a = [1, 2, 5, 8, 3, 8, 3, 5, 7, 3, 6, 8, 3, 5, 7, 1];
Hello(a);
