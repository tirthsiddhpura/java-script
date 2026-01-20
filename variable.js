// Types of variables :
var a="temp";

var_123="hello";
var$123="hello";

//var 123="number"never use
b=24 //never use

//let
let temp ="abc";

//const
const temp_const="hello world !";

//declaration and initilization
var d; //declare
var d =12; //declare and initalize for firat time   
// var add value into window
//var is function scopped
// var can be redecalred and reassigned
var name ="user name";
let name ="user name";

// reassignment ,redeclartion
var temp1 =12;
temp ="number" // reassignment
var temp1 =24; //redeclaration
temp_const ="hello";

//scope (global,block,functional)
var e=23;//global score
consloe.log("global Scope" + e);
{
    var e=25 //block scope
    consloe.loe("global Scope" + e);
}
function abc()
{
    var e=30 //functional scope
    consloe.log("global Scope" + e);
}
abc();
console.log(e);

let f=23;//global score
consloe.log("global Scope" + f);
{
    let f=25 //block scope
    consloe.log("global Scope" + f);
}
function xyz()
{
     f=30 //functional scope
    consloe.log("global Scope" + f);
}
xyz();
console.log(f);

//temporal dead zone(tdz)
// tdz not working on var 
console.log(temp_b);
var temp_b =24;// on var there is no tdz

//console.log(g);
console.log(j);
let j =1