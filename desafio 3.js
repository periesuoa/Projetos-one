// 1. Exibir mensagem de boas-vindas
console.log("Boas-vindas ao programa!");

// 2. Saudação no console usando variável
let nome = "Maria"; // Substitua pelo seu nome
console.log(`Olá, ${nome}!`);

// 3. Saudação usando alert
alert(`Olá, ${nome}!`);

// 4. Perguntar linguagem preferida
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`Linguagem preferida: ${linguagem}`);

// 5. Soma de dois valores
let valor1 = 15;
let valor2 = 7;
let resultadoSoma = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultadoSoma}.`);

// 6. Subtração de dois valores
let valor3 = 20;
let valor4 = 8;
let resultadoSubtracao = valor3 - valor4;
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultadoSubtracao}.`);

// 7. Verificação de maioridade
let idade = prompt("Digite sua idade:");
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// 8. Verificação de número (positivo/negativo/zero)
let numero = prompt("Digite um número:");
if (numero > 0) {
    console.log("Número positivo.");
} else if (numero < 0) {
    console.log("Número negativo.");
} else {
    console.log("Zero.");
}

// 9. Loop while (1 a 10)
console.log("Contagem de 1 a 10:");
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// 10. Verificação de aprovação
let nota = 8.5; // Altere o valor para testar
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// 11. Número aleatório qualquer
let aleatorio = Math.random();
console.log("Número aleatório:", aleatorio);

// 12. Número inteiro entre 1 e 10
let aleatorio10 = Math.floor(Math.random() * 10) + 1;
console.log("Número entre 1-10:", aleatorio10);

// 13. Número inteiro entre 1 e 1000
let aleatorio1000 = Math.floor(Math.random() * 1000) + 1;
console.log("Número entre 1-1000:", aleatorio1000);
