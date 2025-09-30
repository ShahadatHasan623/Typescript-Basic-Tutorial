// Built in Data type : number,string,boolean,void,undefined,null

let userId:number;
let firstName:string;
let lastName:string;
let fullName:string;
let isActivated:boolean;

userId=101;
firstName ="Shahadat";
lastName =" Hossain";
isActivated=true;
fullName =firstName.concat(lastName)

console.log(`your id :${userId},user name:${fullName},account activated:${isActivated}`)

console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())
console.log(fullName.split(" "))

function displayName():void{
      console.log("Hi I am Shahadat")
}
displayName()