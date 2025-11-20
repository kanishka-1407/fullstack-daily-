const fs = require("fs");
const contents = fs.readFileSync("a.txt", "utf-8"); //syncronous-run line by line by completing each
console.log(contents);
const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);

function sum(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function subtract(a,b){
    return a-b;
}
function devide(a,b){
    return a/b;
} 

function doo(a,b,op){
    return op(a,b);
}
const ans = doo(8,4,devide); //functional arguments
console.log(ans);
  

//Asyncronous
   
function print(err,data){
    console.log(data);
}
const contents3 = fs.readFile("a.txt", "utf-8",print); //whenever it done it call print function ,there is no waiting 
const contents4 = fs.readFile("b.txt", "utf-8",print);
console.log("Done!"); //that's why it print first 
function timeout(){
    console.log("click,Now!"); //due to asnyncronous ,no one wait to complete...
}
setTimeout(timeout,10000); //wait 10sec then call timeout func
console.log("Done!!");