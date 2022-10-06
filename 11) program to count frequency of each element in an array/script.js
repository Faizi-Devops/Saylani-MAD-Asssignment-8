var count;
var nusy;
var Hello = function (b) {
    for (var i = 0; i <= 100; i++) {
        count = 0;
        for (var j = 0; j <= b.length - 1; j++) {
            nusy = b[j];
            if (nusy == i) {
                count = count + 1;
                console.log(nusy);
            }
        }
    }
};
var a = [1, 2, 1, 5, 7, 30, 50, 30, 50, 50, 40];
Hello(a);
