var Hello = function (b) {
    // b.push(9);
    // b.unshift(1);
    b.splice(5, 0, 12);
    console.log(b);
};
var a = [1, 2, 3, 4, 5, 6, 7, 8];
Hello(a);
