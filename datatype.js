//datatypes js
// two types of data types:
//1.primitive data types
// copy -->ral value
let a=25;
let b=a;

//2.Non-primitive data types (reference data types)(),[],{}
//copy -->give reference of parent
let d=[1,2,3];
// let e=d;

//<-----primitive data types------->
//types : string ,number, boolean, null,undefined,symbol,bigint
//string :
//'- single quotes 
//""-double quoutes
//-``blackticks
let e= "name";
e="username";
e="first name"

//number
let f=12;
f=12.25;
f=-25;

//boolean
let g =true;
g=false;

//null 
// you give a value 
let v= null;

//undefined:
//you don't give a value ,by default value 
let h;

//symbol:
//unique immutable value
let u1= Symbol ("uid");
let u2=Symbol("uid");
//check u1==u2 
let obj ={ uid :1,name :"test ",email:"test@test.com"};
let u3="uid";
let u4 = Symbol("uid");
// obj [u3]="001";

//biginit 
//check range of number ,number .max_safe_integer
// let number=9727150530;
// number=number + 6;
// let num2= 7226808287;
// num2 + 3n;

//biginit:
//check range of number,number.max_safe_integer
 let Number=9007199254740991;
 Number=Number +6;
 let num2=900719925470991n;
 num2+4n;

 //<------ non-primitive data types----->
 //types :arrays[],objects{},function()
 let temp_array =["user1","user2","usr3"];
  let temp_obj ={ Name:"test",age:9,phone_number:7226808287};
  let profiles=[
    {name:"test1",age:10,phone_number:7226808287},
    {name:"test2",age:15,phone_number:9727150530},
    {name:"test3",age:11,phone_number:7226808289},
  ];
  function name (params){}

  //dynamic typing 
  let u_name="username";
  u_name=123;
  u_name ={};
  //javascript --> typescript

  //type of qurics 
  // type 12 
  //check type of variable use--> ex.typeof NaN,typeof null, 1+"1", 1=="1" 1,==="1"
  //why number Nan -->number 
  //Nan is a failed number oprations that why that type is number 
  //ex. "hello" -5 --> Nan

  //type coeration 
  //"5"+1 //+--> value add and coertion (mix)
  //"5"-1

  //truthy vs falsy values 
  //0 ,false ,"",null,undefined,Nan,document.all,--false
  //ex.!! 0--check value is true and false 
  // ex.if(null){}.is convert it into false
  //ex.if (-1){},js consrt it into true 
  //all-->true


