var even = [];
var odd = [];
var Hello = function (b) {
    var c = b.sort(function (a, b) { return a - b; });
    for (var i = 0; i <= c.length - 1; i++) {
        if (c[i] % 2 == 0) {
            even.push(c[i]);
        }
        else {
            odd.push(c[i]);
        }
    }
    var newArray = even.concat(odd);
    return newArray;
};
var a = [1, 4, 6, 9, 3, 2, 5, 50, 7, 10];
console.log(Hello(a));
