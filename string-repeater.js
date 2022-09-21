const prompt = require('prompt-sync')({signint: true});

let str = String(prompt("Enter a string: "));
let str2 = str

let sum = 0; 

while(str.length <= 10){
    str += str2 
    console.log(str)
}