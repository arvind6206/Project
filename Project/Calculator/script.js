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
    if(b===0){
        return "Error: Can't divide by zero!";
    }
    return a/b;
}

function calculate(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation =(document.getElementById("operation").value);

    let result;
    if(operation === "+"){
        result = add(num1,num2);
    }else if(operation === "-"){
        result = subtract(num1,num2);
    }
    else if(operation === "*"){
        result = multiply(num1,num2);
    }else if(operation === "/"){
        result = divide(num1,num2);
    }else{
        result = "Invalid Operation";
    }

    document.getElementById("result").textContent =result;
}