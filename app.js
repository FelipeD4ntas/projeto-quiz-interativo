const form = document.querySelector('.quiz-form');
const respostasCertas = ['C','C','C','C','C','C','C','C','C','C'];

form.addEventListener('submit', event => {
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

    respostasUsuario.forEach((respostaUsuario, index) => {
        if(respostaUsuario === respostasCertas[index]) {
            pontos += 1;
        };
    });
    alert(`Você acertou ${pontos} de 10`);
})