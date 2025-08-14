// Boas-vindas mais atrativas
alert('🎉 Boas-vindas ao Jogo do Número Secreto! 🎉');

// Gerando um número aleatório entre 1 e 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 1;

// Laço principal do jogo
while (true) {
    let chute = prompt('Escolha um número entre 1 e 10');
    
    // Verifica se o usuário cancelou o prompt
    if (chute === null) {
        alert('Jogo encerrado. Até a próxima!');
        break;
    }
    
    // Converte para número e valida o input
    chute = parseInt(chute);
    
    if (isNaN(chute) || chute < 1 || chute > 10) {
        alert('Por favor, digite um número válido entre 1 e 10!');
        continue;
    }
    
    // Verifica o palpite
    if (chute === numeroSecreto) {
        alert(`🎊 Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativa(s)!`);
        break;
    } else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}. Tente novamente!`);
    } else {
        alert(`O número secreto é maior que ${chute}. Tente novamente!`);
    }
    
    tentativas++;
}