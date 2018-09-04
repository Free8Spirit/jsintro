// Author: Vert, David 9/5/2018
var x = 0;
while (x < 100) {
    x = x + 1;
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        if (x % 3 === 0) {
            console.log("Fizz");
        } else if (x % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(x);
        }
    } 
}