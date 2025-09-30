// Built in Data type : number,string,boolean,void,undefined,null
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 101;
firstName = "Shahadat";
lastName = " Hossain";
isActivated = true;
fullName = firstName.concat(lastName);
console.log("your id :".concat(userId, ",user name:").concat(fullName, ",account activated:").concat(isActivated));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.split(" "));
function displayName() {
    console.log("Hi I am Shahadat");
}
displayName();
