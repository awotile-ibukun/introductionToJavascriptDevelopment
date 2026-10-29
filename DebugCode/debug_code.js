function performOperation(){
    //get user input from input fields
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);

    // check if the two inputs are valid numbers
    if(!isNaN(num1) && !isNaN(num2)){
        //perform the operation
        let result = multiply(num1, num2);
        
        //display result
        displayResult(result);
    }else{
        displayResult('Please enter valid numbers!')
    }

}

function multiply(a, b){
    //Introduce the dubugger statements to pause execution
    debugger;
    // multiply the number

    return a * b;
}

function displayResult(result){
    //display result in the paragraph element;
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`
}




