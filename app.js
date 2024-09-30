alert('bem vindo ao jogo');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
console.log(numeroSecreto); 
let tentativas = 1;
 
// while é usado como enquanto
while (chute != numeroSecreto) {
    chute = prompt('escolha um numero de 1 a 100');
// se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
    } 
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`voce acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//    if (tentativas > 1){
  //      alert(`voce acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
    //} else {
      //  alert(`voce acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
    // } 1










043190222054



043190222040
