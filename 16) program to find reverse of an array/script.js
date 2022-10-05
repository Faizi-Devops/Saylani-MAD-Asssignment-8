var newArray = [];
var Hello = function (b) {
    for (var i = b.length - 1; i >= 0; i--) {
        newArray.push(b[i]);
    }
    console.log("The elements of the arrays before are ".concat(b));
    console.log("The elements of the array after are ".concat(newArray));
};
var a = [1, 2, 3, 4, 5];
Hello(a);
