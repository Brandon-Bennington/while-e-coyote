const prompt = require('prompt-sync')({signint: true});

let x = Number(prompt("Enter x:  "));

const y = Number(prompt("Enter y:  "));


while(x % y != 0){
    x ++; 
    console.log(x)
}
 console.log(`${x} is divisible by ${y}`)