function convertBase() {
    let inputBox = document.getElementById("inputText");
    let outputBox = document.getElementById("outputText");
    let inputBaseBox = document.getElementById("inputBaseText");
    let outputBaseBox = document.getElementById("outputBaseText");
    inputNumber = inputBox.value/1;    
    
    if (isNaN(inputNumber)){
        inputNumber = "Please, input a number.";
    }
    let result = parseInt(inputNumber,inputBaseBox.value).toString(outputBaseBox.value);
    outputBox.value = result;
    
}

function swapBases(){
    let temp = document.getElementById("inputBaseText").value;
    document.getElementById("inputBaseText").value = document.getElementById("outputBaseText").value;
    document.getElementById("outputBaseText").value = temp;
}

