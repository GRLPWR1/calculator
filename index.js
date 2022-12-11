function addition() {
    let x = document.getElementById('summand1');
    let y = document.getElementById('summand2');
    let sum = +x.value + +y.value;
    let result = document.getElementById('additionResult').innerHTML = sum;
}
function deduction() {
    let minuend = document.getElementById('minuend');
    let subtrahend = document.getElementById('subtrahend');
    let difference = minuend.value - subtrahend.value;
    let result = document.getElementById('deductionResult').innerHTML = difference;
}
function division() {
    let dividend = document.getElementById('dividend');
    let divisor = document.getElementById('divisor');
    if(Number(divisor.value)===0) {
        let error = 'На ноль делить нелья!';
        document.getElementById('divisionResult').innerHTML = error;
    }
    else {
        let quotient = dividend.value/divisor.value;
        let result = document.getElementById('divisionResult').innerHTML = quotient;
    }
}
function multiplication() {
    let multiplier1 = document.getElementById('multiplier1');
    let multiplier2 = document.getElementById('multiplier2');
    let product = multiplier1.value * multiplier2.value;
    let result = document.getElementById('multiplicationResult').innerHTML = product;
}