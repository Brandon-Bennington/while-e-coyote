const prompt = require('prompt-sync')({signint: true});

let num = Number(prompt("Please enter number: "));

let sum = 0; 

while(num <= 100){
    num *= 2
    console.log(num)
}
