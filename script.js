const display = document.getElementById('display');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (event) => {
    const value = event.target.innerText;

    if (value === '=') {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Erro';
        }
    } else if (value === 'C') {
        display.value = '';
    } else if (value === '←') {
        display.value = display.value.slice(0, -1);
    } else {
        display.value += value;
    }
});

// Funções para operações científicas
function sin() {
    display.value = Math.sin(eval(display.value));
}

function cos() {
    display.value = Math.cos(eval(display.value));
}

function tan() {
    display.value = Math.tan(eval(display.value));
}

// Adicione mais funções para outras operações científicas (log, raiz quadrada, etc.)
