
let current = "";
let num1 = null;
let num2 = null;
let operator;

/*
create event handlers for numbers and operators
when number is clicked we just keep updating current and appending numbers
when an operator is clicked it confirms and sets the number
    if num1 and num2 are empty put the number in 1
    else put the number in 2
    if num1 and 2 are not empty it runs operate 
        in operate 
        we set the result to the first number
        we update the display with the result
        we clear num 2 
    else it waits for next input
*/

 let operators = document.querySelector(".operators");
 let numbers = document.querySelector(".numbers");
 let display = document.querySelector("#display");
 let clearBttn = document.querySelector("#clear");

 clearBttn.addEventListener("click", ()=>{
    num1 = null;
    num2 = null
    display.textContent = null;
    current = "";
 })

 opChildren = [...operators.children];


 opChildren.forEach((node)=>{
    
    node.addEventListener("click",(e) =>{
       console.log(num2)
        if(!num1 && !num2) {
            console.log("in IF1")
            num1 = current;            
        } 
        else {num2 = current}
        if(num1 && num2) {
            console.log("in IF2")    
            result = operate(operator, parseInt(num1), parseInt(num2));
            num1 = result;
            num2 = null;            
            display.textContent = result;
        }
        
        if(node.textContent !== "=") {operator = node.textContent;}
        else{
          num1 =  null;
        }
        current = "";
    })
 })

numChildren = [...numbers.children];

numChildren.forEach((node)=>{
    
    node.addEventListener("click",(e) =>{
     if(!num1){
         current = current + node.textContent
         display.textContent = current;
         
        } else {
         current = node.textContent;
         display.textContent = current;         
        }


    })
 })

function numberClick(){

}

function numberClick(){

}

function operate(operator,num1,num2){
console.log(operator,num1,num2);
let ans
    switch (operator) {
        case "+":
           console.log("+");
           ans = add(num1,num2);
           break;
        
        case "-":
            ans = subtract(num1,num2);
            break;

        case "x":
            ans = multiply(num1,num2);
            break;
        
        case "\\":
        console.log("in switch")    
        if(num2 === 0) return "What bastard doth not!"  
            ans = divide(num1,num2);
           break;

        default:
            break;
    }

    if(ans % 1 !==0 ){
        return ans.toFixed(2)
    } else{ return ans}
    

}


function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}