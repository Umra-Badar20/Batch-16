class Employee{
    constructor(name, designation){
        this.name = name,
        this.designation= designation 
        console.log("Constructor called");       
    }
    login(){
        console.log(`${this.name} login `);
        
    }
     logout(){
        console.log(`${this.name} logout `);    
    }
    requestLeave(x){
        console.log(`${this.name}  can request ${x} leaves in a month`);      
    }
}
// var umra = new Employee("Umra", "Web Developer")
// var sana = new Employee("Sana", "App Developer")
// umra.login()
// umra.requestLeave(3)
// sana.logout()

//Class Inheritance
class Programmer extends Employee{   
    requestCoffee(x){
        console.log(`${this.name}  can request ${x} coffees in a day`);      

    }
    requestLeave(x){
        super.requestLeave(3)  
        console.log(`One extra leave allocated ${x+1}`);      

    }
}
// var umra = new Programmer("umra", "Web developer")
// umra.requestCoffee(2)
// umra.login()
// umra.requestLeave(3)

//Enhanced Object Literals


var objectKey = "rollNo"
var accessToken = "JShag273462vfg48"
var student = {
    name: "Umra",
    [objectKey]: 10,
    course:"WMA",
    // login: function(){
    //     console.log("Student can login");
        
    // },
    login(){
        console.log("Student can login");
        
    },
    // accessToken:accessToken,
    accessToken
}
// console.log(student);
// student.login()



//Ternary operator   ?
var a = 100
var b;
// if(a===100){
//     b=true
// }else{
//     b=false
// }

(a===10)? b=true : b=false
console.log(b);
