var addition = 0;
var Hello = function (b) {
    for (var i = 0; i <= b.length - 1; i++) {
        addition = addition + b[i];
    }
    console.log("The sum of all numbers are ".concat(addition));
};
var a = [1, 2, 3, 4, 5];
Hello(a);
