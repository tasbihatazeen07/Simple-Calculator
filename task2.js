function appendToDisplay(value) {
    var display = document.getElementById('display');
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = '';
    }
    display.innerText += value;
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function calculate() {
    var display = document.getElementById('display');
    var expression = display.innerText;

    try {
        var result = eval(expression);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}
