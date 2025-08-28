

let num1;
let num2;
let operator;


// let operators = document.querySelectorAll(){

// }

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