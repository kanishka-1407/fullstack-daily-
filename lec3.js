class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area(){
        const area = this.width * this.height;
        return area;
    }
    paint(){
        console. log('Painting with color ${this.color)');
    }
}
const rect = new Rectangle(2,4);
const area = rect.area();
console. log(area);
//map use for having (key ,value )
const map = new Map();
map.set('name','alice');
map.set('age:','30');
console.log(map.get('name'));
//set-get use

const date= new Date();//current time 
console.log(date.getFullYear());//we can use more option like day,hour,minute...


//PROMISES 

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); //resolve function calls the callback function in promises
  }
  
  function callback() {
      console.log("3 seconds have passed");
  }
  
  setTimeoutPromisified(3000).then(callback) //syntatically clearner then the setimeout 


  //how own promises create 
  function random(resolve){ //resolve is also a function which slightly calls or related to callback function 
    setTimeout(resolve,3000);
  }
  const p =new Promise(random); //suppose to return you something eventually 

  //using the eventual value return by p
   function callback1(){
    console.log("success");
   }
   p.then(callback1)



  //assignment 


function cb(){
    console.log("hi");
}
function cb2(){
    console.log("hello");
}
function cb3(){
    console.log("hello there");
}

setTimeoutPromisified(1000).then (cb)
setTimeoutPromisified(3000).then (cb2)
setTimeoutPromisified(5000).then (cb3)

 //alternating way 
// setTimeoutPromisified(1000).then(function () {
//     console.log("hi");
//     setTimeoutPromisified(3000).then(function () {
//       console.log("hello");
//       setTimeoutPromisified(5000).then(function () {
//         console.log("hello there");
//       });
//     });
//   });

//assignment 2

//promisified version of read file 

const fs = require("fs");

function readTheFile(sendTheFinalValueHere) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
        sendTheFinalValueHere(data);
    });
}

function readFile() {
    return new Promise(readTheFile);
}

function callback1(contents) {
    console.log(contents);
}

const p1 = readFile();
p1.then(callback1);




