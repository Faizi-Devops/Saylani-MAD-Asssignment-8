var anotherArray = [];
var Hello = function (b) {
    for (var i = 0; i <= b.length - 1; i++) {
        anotherArray.push(b[i]);
    }
    console.log(anotherArray);
};
var a = [10, 2, 3, 4, 5];
Hello(a);
