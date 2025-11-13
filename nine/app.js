// var word = prompt("Enter a palindrome word")// maham
// var result = ""
// for(var i=0; i<word.length;i++){
//    if()
// }
// for(var i=word.length-1; i>=0; i--){
//     // console.log(word[i]);
//        result+=word[i]
// }
// console.log(result);
// if(result.toLowerCase()===word.toLowerCase()){
//     console.log("Its a palindrome");

// }else{

//     console.log("Its not a palindrome");
// }

// console.log("i".toLocaleUpperCase("TR"));
// console.log("i".toLocaleUpperCase("US"));

var user = prompt("Enter your name here:");
var students = ["ali", "sara", "sana", "amna", "ahmed", "fizza"];
var flag = false;
for (var i = 0; i < students.length; i++) {
  // console.log(students[i]);
  if (user.toLowerCase() === students[i]) {
    console.log(user + " is present");
    flag = true;
  }
}
if (!flag) {
  console.log(user + " is absent");
}
