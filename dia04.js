const prompt = require("prompt-sync")();
//gera o número secreto
let numSecreto = Math.floor(Math.random() * (10 + 1))

//inicializa a quantidade de tentativas que o usuário terá;
let tentativas = 3;
console.log(`Você tem 3 tentativas para acertar!`)

//inicializa a variavel chute
let chute;
let acertar = false

while (tentativas >= 1){
    //usuario dá entrada
    chute = prompt('Tenta adivinhar o número secreto: ');
    if (chute == numSecreto){
        console.log('você acertou')
        acertar = true
        break
    }else {
        if (chute > numSecreto){
            console.log('Você errou! O número secreto é menor');
            tentativas--
            console.log(`VocÊ tem ${tentativas} tentativas restantes`)            
                   
        } else {
            console.log('Você errou! O número secreto é maior!');
            tentativas--
            console.log(`VocÊ tem ${tentativas} tentativas restantes`);                          
        }        
    }    
}
//imprime o número secreto caso o usuário não acertar
if (!acertar){
    console.log(`Você não conseguiu adivinhar o número secreto! Ele era o número ${numSecreto}`)
}
