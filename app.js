const form = document.querySelector('.quiz-form');
const respostasCertas = 'V';
const popup = document.querySelector('#popup');
const resultado = document.querySelector('#saida');

form.addEventListener('submit', verificaRespostas);
popup.addEventListener('click', fechar_popup);

function verificaRespostas(event) {
    event.preventDefault();

    let pontos = 0;
    const respostasUsuario = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
        form.inputQuestion6.value,
        form.inputQuestion7.value,
        form.inputQuestion8.value,
        form.inputQuestion9.value,
        form.inputQuestion10.value
    ];

    respostasUsuario.forEach((respostaUsuario) => {
        if(respostaUsuario === respostasCertas) {
            pontos += 10;
        };
    });

    

    popup.classList.toggle('show-popup');

    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    let counter = 0;

    const timer = setInterval(() => {
        if (counter === pontos) {
            clearInterval(timer);
        };
        saida.innerText = `Você acertou ${counter}% do Quiz.`;
        counter++
    }, 20);
}

function fechar_popup(event) {
    const elementoClicado = event.target.classList.value;
    const classNames = ['closedPopup', 'tentar-novamente', 'show-popup'];
    const closedPopup = classNames.some(className => className === elementoClicado);

    if (closedPopup) {
        popup.classList.toggle('show-popup');
    }
}



