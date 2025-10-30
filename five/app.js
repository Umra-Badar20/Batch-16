var myMap = new Map([[1,"num"],[1,"num"]])
myMap.set("fname","Umra")
myMap.set("RollNo", 1)
myMap.set(true,"Boolean")
myMap.set(123,"Number")
myMap.delete("fname")
console.log(myMap.has("fname"));
// myMap.clear()
console.log(myMap.get("RollNo"));

console.log(myMap, typeof myMap);

myMap.forEach(function(value, key){
    console.log(key+" "+value);   
});
for(const i of myMap){
    console.log(i);   
}
var myObj = {
    "a":"Umra",
    true:"boolean",
    123:"number",
}
console.log(myObj);

