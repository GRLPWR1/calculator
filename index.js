function addition() {
    let x = prompt('Введите первое слогаемое');
    let y = prompt('Введите второе слогаемое');
    let sum = +x + +y;
    alert(sum);
}
function deduction() {
    let minuend = prompt('Из скольки вычесть (введите число)?');
    let subtrahend = prompt('Сколько вычесть (введите число)?');
    let difference = minuend - subtrahend;
    alert(difference);
}
function multiplication() {
    let multiplier1 = prompt('Какое число умножить?');
    let multiplier2 = prompt('На какое число умножить?');
    let result = multiplier1 * multiplier2;
    alert(result);
}
function division() {
    let n = prompt('Какое число делим?');
    let q = prompt('На какое число делим?');
    if(q==0) {
        alert('На ноль делить нелья!');
    }
    else {
        let result = n/q;
        alert(result);
    }
}