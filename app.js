const form = document.querySelector('.quiz-form');
const respostasCertas = ['A', 'B', 'B', 'D', 'C', 'B', 'C', 'C', 'C', 'A'];
const popup = document.querySelector('#popup');
const resultado = document.querySelector('#saida-resultado-pontos-user');

function getRespostasUsuario() {
    return respostasUsuario = respostasCertas.map((_, index) => 
        form[`inputQuestion${index + 1}`].value);
};

function calculaPontosUsuario(respostasUsuario) {
    const pontos = respostasUsuario.reduce((acc, respostaUsuario, index) => 
        respostaUsuario === respostasCertas[index] ? acc + 10 : acc, 0);
    
    animandoPontos(pontos);
};

function mostrarPontosUser() {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    
    popup.classList.toggle('show-popup');
};

function animandoPontos(pontos) {
    let counter = 0;

    const timer = setInterval(() => {
        if (counter === pontos) {
            clearInterval(timer);
        };

        resultado.innerText = `Você acertou ${counter++}% do Quiz.`;
    }, 50);
};

function resetarPontosUser() {
    return pontos = 0
}

function verificaRespostas(event) {
    event.preventDefault();
    
    const respostasUsuario = getRespostasUsuario();
    resetarPontosUser();
    calculaPontosUsuario(respostasUsuario);
    mostrarPontosUser();
}

function fechar_popup(event) {
    const elementoClicado = event.target.classList.value;
    const classNames = ['closedPopup', 'tentar-novamente', 'show-popup'];
    const closedPopup = classNames.some(className => className === elementoClicado);

    if (closedPopup) {
        popup.classList.toggle('show-popup');
    };
    
};

form.addEventListener('submit', verificaRespostas);
popup.addEventListener('click', fechar_popup);
