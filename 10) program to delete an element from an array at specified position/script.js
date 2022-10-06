var Hello = function (b) {
    b.splice(2, 1);
    console.log(b);
};
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Hello(a);
