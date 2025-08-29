
let current;
let num1;
let num2;
let operator;

//store
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
 let operators = document.querySelectorAll(".operators")
 let buttons = document.querySelectorAll(".operators")
 let display = document.querySelector("#display")

 operators.forEach((node)=>{
    console.log(node)
    node.addEventListener("click",(e) =>{
        
    })
 })

function numberClick(){

}

function numberClick(){

}

function operate(operator,num1,num2){
console.log(operator,num1,num2);

    switch (operator) {
        case "+":
            console.log("+");
           return add(num1,num2);
            
        
        case "-":
            return subtract(num1,num2);
            

        case "x":
            return multiply(num1,num2);
        
        
        case "\\":
            return divide(num1,num2);
           

        default:
            break;
    }

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