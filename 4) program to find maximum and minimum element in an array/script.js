var maximum;
var minimum;
var Hello = function (b) {
    maximum = b[0];
    minimum = b[0];
    for (var i = 0; i <= b.length - 1; i++) {
        if (b[i] > maximum) {
            maximum = b[i];
        }
        else if (b[i] < minimum) {
            minimum = b[i];
        }
        else {
            maximum = b[0];
            minimum = b[0];
        }
    }
    console.log("The maximum number is ".concat(maximum));
    console.log("The minimum number is ".concat(minimum));
};
var a = [-1, 40, 60, 90, 70, 500];
Hello(a);
