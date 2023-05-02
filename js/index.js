
const operator = document.getElementById("operator");
let numOne = document.getElementById("numOne")
let numTwo= document.getElementById("numTwo")
const displayResult = document.querySelector('.result')

document.getElementById('btn').addEventListener('click', calculate);

function calculate(){
    
    if(operator.value == '-'){
        displayResult.innerText = numOne.value - numTwo.value;
    }else if(operator.value === '+'){
        displayResult.innerText = Number(numOne.value) + Number(numTwo.value);
    }else if(operator.value == '*'){
        displayResult.innerText =  numOne.value * numTwo.value;
    }
    else if(operator.value === '/'){
        displayResult.innerText = numOne.value / numTwo.value;
    }
    console.log('calculated')
}