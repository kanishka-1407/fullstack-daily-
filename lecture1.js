let Fname="kannu";
console.log(Fname);
const age=30;
var isstu = true;
Fname="kanishka";
console.log(Fname);
console.log(age);
console.log(isstu);

let numbers =[1,2,3];
let name = ["k","A","D"];
console.log(numbers[1]);
for(let i=0;i<3;i++){
    console.log(name[i]);
}



function greet(name){
    return "Hello, "+name;
}
function isage(age){
    if(age>18){
        return true;
    }else{
        return false;
    }
}
let ans=greet("naman");
console.log(ans);
let canvote = isage(12); 
console.log(canvote);


let user={ name:"kannu" , age:15};
console.log("name " + user.name);

