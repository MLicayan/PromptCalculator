function add() {
    let FirstInput = prompt("Enter your first number");
    let SecondInput = prompt("Enter your second number");
    let x = parseFloat(FirstInput);
    let y = parseFloat(SecondInput);
    let result = x + y;
    alert("Addition: " + x + " + " + y + " = " + result);
}

function sub() {
    let FirstInput = prompt("Enter your first number");
    let SecondInput = prompt("Enter your second number");
    let x = parseFloat(FirstInput);
    let y = parseFloat(SecondInput);
    let result = x - y;
    alert("Subtraction: " + x + " - " + y + " = " + result);
}

function multi() {
    let FirstInput = prompt("Enter your first number");
    let SecondInput = prompt("Enter your second number");
    let x = parseFloat(FirstInput);
    let y = parseFloat(SecondInput);
    let result = x * y;
    alert("Multiplication: " + x + " * " + y + " = " + result);
}

function div() {
    let FirstInput = prompt("Enter your first number");
    let SecondInput = prompt("Enter your second number");
    let x = parseFloat(FirstInput);
    let y = parseFloat(SecondInput);
    let result = x / y;
    alert("Division: " + x + " / " + y + " = " + result);
}