alert ("bem vindo ao jogo");
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute; 
let tentativas = 1;
 
// while é usado como enquanto
while (chute != numeroSecreto) {
    chute = prompt ("escolha um numero de 1 a 30");
// se o chute for igual ao numero secreto
    if (chute == numeroSecreto){
        alert(`voce acertou o numero secreto ${numeroSecreto} com ${tentativas}`);
    } else {
        if (chute > numeroSecreto){
            alert (`O numero secreto é menor que ${chute}`);
        } else{
            alert (`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
    } 
} 
