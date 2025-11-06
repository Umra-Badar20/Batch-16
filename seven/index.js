var firstName= "Umra"

function sum(a,b){
   console.log( a+b); 
}
function sub(a,b){
    console.log(a-b);
    
}
function multiply(a,b){
    console.log(a*b);
    
}

export default {firstName , sum}; //default expot
export {sub, multiply} // Named export
