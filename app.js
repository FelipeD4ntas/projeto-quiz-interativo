const form = document.querySelector('.quiz-form');
const respostasCertas = ['A', 'B', 'B', 'D', 'C', 'B', 'C', 'C', 'C', 'A'];
const popup = document.querySelector('#popup');
const resultado = document.querySelector('#saida');

form.addEventListener('submit', verificaRespostas);
popup.addEventListener('click', fechar_popup);

function verificaRespostas(event) {
    event.preventDefault();
   
    let pontos = 0;
    let counter = 0;
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
    const options = {
        top: 0,
        left: 0,
        behavior: 'smooth'
    };

    scrollTo(options);
    respostasUsuario.forEach(respostasUser);
    popup.classList.toggle('show-popup');

    const timer = setInterval(contador, 50);

    function contador() {
        if (counter === pontos) {
            clearInterval(timer);
        };
        saida.innerText = `Você acertou ${counter}% do Quiz.`;
        counter++
    }

    function respostasUser(respostaUsuario, index) {
        if(respostaUsuario === respostasCertas[index]) {
            pontos += 10;
        };
    };
}

function fechar_popup(event) {
    const elementoClicado = event.target.classList.value;
    const classNames = ['closedPopup', 'tentar-novamente', 'show-popup'];
    const closedPopup = classNames.some(className => className === elementoClicado);

    if (closedPopup) {
        popup.classList.toggle('show-popup');
    };
    
};



