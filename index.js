var arr = [];
var n = 1;
var fact = 0;

function totalArray(arr, n) {
    var output = [];
    for (var i = 0; i < (arr.length); i++) {
        fact = Math.trunc(arr[i] / (n));
        var x = 1;
        for (var j = 1; j <= fact; j++) {
            x = x * j;
        }
        output.push(x);
    }
    var large = output[0];
    for (var i = 0; i < output.length; i++) {
        var max = output[i];
        if (max > large) {
            large = max;
        }
    }
    return large;
}
var largeNumber = totalArray([1, 4, 7, 16], 4);
console.log(largeNumber);
