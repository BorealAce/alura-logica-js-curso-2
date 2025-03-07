let header = document.querySelector('h1');
header.innerHTML = 'Hora do Desafio';

function botaoClicado() {
    console.log('O botão foi clicado');
}

function botaoClicadoAlerta() {
    alert('Eu amo JS');
}

function botaoClicadoPrompt() {
    let cidade = prompt('Cite uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function botaoClicadoSoma() {
    let numeroUm = Number(prompt('Digite o primeiro número para soma:'));
    let numeroDois = Number(prompt('Digite o segundo número para soma:'));
    const resultado = numeroUm + numeroDois;
    alert(`A soma de ${numeroUm} + ${numeroDois} é ${resultado}`);   
}