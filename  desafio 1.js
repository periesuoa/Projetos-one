// 1. Mostrar alerta de boas-vindas
alert("Boas vindas ao nosso site!");

// 2. Declarar variáveis iniciais
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

// 3. Alertas de erro
alert("Erro! Preencha todos os campos");

let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

// 4. Capturar dados do usuário
let nomeUsuario = prompt("Qual é o seu nome?");
let idadeUsuario = prompt("Qual é a sua idade?");

// 5. Validar idade para habilitação
if (Number(idadeUsuario) >= 18) {
    alert("Pode tirar a habilitação!");
}
