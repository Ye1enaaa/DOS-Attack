var firstValue = 100;
    var formula = '10 + firstValue; while(true){} ';
    //while(true){}//
    document.addEventListener('DOMContentLoaded', function () {
        const input = document.getElementById('inputT');
        const result = document.getElementById('result');

        input.innerText = formula;
        result.innerText = eval(formula)
});