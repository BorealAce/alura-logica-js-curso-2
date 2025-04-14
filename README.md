# 🚀 Resolução dos desafios – Lógica de Programação (Parte 2)
## Desafio 3 - Respostas
1. **Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.**
```js
function calculoIMC(altura, peso) {
    return peso/(altura)**2;
}

let grau;
let resultadoIMC = (calculoIMC(1.80, 80));

if (resultadoIMC < 18.6) {
    grau = 'abaixo do normal';
} else if (resultadoIMC > 24.9) {
    grau = 'acima do normal';
} else {
    grau = 'normal';
}

console.log(`O seu IMC é de ${resultadoIMC.toFixed(2)}, está ${grau}.`);
```
2. **Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.**
```js
function calcularFatorial(numero) {
    if (numero == 0 || numero == 1) {
        return 1
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}
let numeroFatorial = 8;
let resultadoFatorial = calcularFatorial(numeroFatorial);
console.log(`O fatorial do número ${numeroFatorial} é ${resultadoFatorial}.`);
```
3. **Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.**
```js
function calculoConversao(dolares) {
    let cotacaoDoDolar = 4.80;
    return (dolares * cotacaoDoDolar).toFixed(2);
}
let dolares = 300;
let resultadoConversao = calculoConversao(dolares);
console.log(`US$${dolares} equivalem a R$${resultadoConversao}.`);
```
4. **Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.**
```js
function calcularRetangulo(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (largura+altura);
    console.log(`A área do retângulo é de ${area} metros quadrados.`);
    console.log(`O perimetro do retângulo é de ${perimetro} metros.`);
}
let alturaRetangulo = 15;
let larguraRetangulo = 5;
calcularRetangulo(alturaRetangulo, larguraRetangulo);
```
5. **Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.**
```js
function calcularCirculo(raio) {
    let pi = 3.14;
    let areaCirculo = (pi * raio ** 2);
    let perimetroCirculo = (2 * pi * raio);
    console.log(`A área da sala circular é de ${areaCirculo.toFixed(2)} metros quadrados.`);
    console.log(`O perímetro da sala circular é de ${perimetroCirculo.toFixed(2)} metros.`);
}
let raioCirculo = 5;
calcularCirculo(raioCirculo);
```
6. **Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.**
```js
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultadoMulti = (numero * i);
        console.log(`${numero} x ${i} = ${resultadoMulti}`);
    }
}
let numeroTabuada = 8;
tabuada(numeroTabuada);
```
