# 🚀 Resolução dos desafios – Lógica de Programação (Parte 2)
## Desafio 2 - Respostas
1. **Criar uma função que exibe "Olá, mundo!" no console.**
```js
function cumprimentar() {
    console.log('Olá, mundo!');
}
cumprimentar();
```
2. **Criar uma função que recebe um nome como parâmetro e exibe "Olá nome!" no console.**
```js
function cumprimentarComNome(nome) {
    console.log(`Olá ${nome}`);
}
cumprimentarComNome("Gabriel");
```
3. **Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.**
```js
function dobroDoNumero(numero) {
    return numero * 2;
}
let resultadoDobro = dobroDoNumero(5);
console.log(resultadoDobro);
```
4. **Criar uma função que recebe três números como parâmetros e retorna a média deles.**
```js
function mediaDeNumeros(num_1, num_2, num_3) {
    return (num_1 + num_2 + num_3) / 3;
}
let resultadoMedia = mediaDeNumeros(2, 4, 10);
console.log(resultadoMedia);
```
5. **Criar uma função que recebe dois números como parâmetros e retorna o maior deles.**
```js
function maiorNumero(num_a, num_b) {
    return num_a > num_b ? num_a : num_b;
}
let resultadoMaior = maiorNumero(40, 28);
console.log(resultadoMaior);
```
6. **Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.**
```js
function quadradoDoNumero(num) {
    return num * num;
}
let resultadoQuadrado = quadradoDoNumero(10);
console.log(resultaQuadrado);
```