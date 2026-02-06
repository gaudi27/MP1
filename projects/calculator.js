function addition() {
    const num1 = parseFloat(document.getElementById("first-number").value);
    const num2 = parseFloat(document.getElementById("second-number").value);
    const result = num1 + num2;
    displayResult(result);
}

function subtraction() {
    const num1 = parseFloat(document.getElementById("first-number").value);
    const num2 = parseFloat(document.getElementById("second-number").value);
    const result = num1 - num2;
    displayResult(result);
}

function multiplication() {
    const num1 = parseFloat(document.getElementById("first-number").value);
    const num2 = parseFloat(document.getElementById("second-number").value);
    const result = num1 * num2;
    displayResult(result);
}

function division() {
    const num1 = parseFloat(document.getElementById("first-number").value);
    const num2 = parseFloat(document.getElementById("second-number").value);
    const result = num1 / num2;
    displayResult(result);
}

function power() {
    const num1 = parseFloat(document.getElementById("first-number").value);
    const num2 = parseFloat(document.getElementById("second-number").value);
    
    let result = 1;
    for (let i = 0; i < num2; i++) {
        result = result * num1;
    }
    
    displayResult(result);
}

function clearCalculator() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = "";
}

function displayResult(result) {
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = String(result);
    
    if (result < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "#2c3e50";
    }
}
