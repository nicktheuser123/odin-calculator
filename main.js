
let current = "";
let num1 = null;
let num2 = null;
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
 let operators = document.querySelector(".operators")
 let numbers = document.querySelector(".numbers")
 let display = document.querySelector("#display")

opChildren = [...operators.children];

opChildren.forEach((node)=>{
    
    node.addEventListener("click",(e) =>{
        if(node.textContent === "=") operator = node.textContent;
        if(!num1 && !num2) {
            num1 = current;
            
        } 
        else {num2 = current}
        if(num1 && num2) {
            result = operate(operator, num1, num2);
            num1 = result;
            num2 = null;            
            display.textContent = result;
        }
        if(node.textContent === "=") {
          num1 =  null
        }
    })
 })

 numChildren = [...numbers.children];

numChildren.forEach((node)=>{
    
    node.addEventListener("click",(e) =>{
     if(!num1){
         current = parseInt(current + node.textContent)
         display.textContent = current;
         console.log(current)
        } else {
         current = parseInt(node.textContent)
         display.textContent = current;
         console.log(current)
        }


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