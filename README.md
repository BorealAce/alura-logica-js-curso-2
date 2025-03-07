# 🚀 Resolução dos desafios – Lógica de Programação (Parte 2)
## Desafio 1 - Respostas
1. **Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.**
```js
let header = document.querySelector('h1');
header.innerHTML = 'Hora do Desafio';
```
2. **Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.**
- É necessário escrever a função no HTML:
``` html
<button onclick="botaoClicado()" class="button">Console</button>
```
- Depois atribui no Javascript:
```js
function botaoClicado() {
    console.log('O botão foi clicado');
}
```
3. **Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.**
- HTML: 
``` html
<button onclick="botaoClicadoAlerta()" class="button">Alert</button>
```
- Javascript: 
```js
function botaoClicadoAlerta() {
    console.log('Eu amo JS');
}
```
4. **Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.**
- HTML:
``` html
<button onclick="botaoClicadoPrompt()" class="button">Prompt</button>
```
- Javascript:
```js
function botaoClicadoPrompt() {
    let cidade = prompt('Cite uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você.`);
}
```
5. **Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.**
- HTML:
``` html
<button onclick="botaoClicadoSoma()" class="button">Soma</button>
```
- Javascript:
```js
function botaoClicadoSoma() {
    let numeroUm = Number(prompt('Digite o primeiro número para soma:'));
    let numeroDois = Number(prompt('Digite o segundo número para soma:'));
    const resultado = numeroUm + numeroDois;
    alert(`A soma de ${numeroUm} + ${numeroDois} é ${resultado}`);   
}
```