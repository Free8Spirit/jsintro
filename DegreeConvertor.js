// Author Vert, David   9/5/2018
'use strict';
module.exports.prompt = prompt;

function prompt(question, h) {
    
    h = !!h;
    if (typeof question == "string") { process.stdout.write(question); };
    h = 22; //Degrees Celsius; MAKE INITUAL CHANGE HERE!!!
    return h;
};

//var temp = prompt(' ', 'temp'); //var temp = prompt('Enter a temp in degrees Celsius: ', 'temp');
var temp = 22; //instead of using prompt, rerouted around function for simplicity ^-^
var x = temp;
if (temp != null) {
    temp = ((x * 9) / 5) + 32; //From Celsius to Fahrenheit;
    console.log(x + " degrees Celsius equals " + temp + " degrees Fahrenheit.");
};