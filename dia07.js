const prompt = require("prompt-sync")();
//função de adiçao
function somar(a,b){
    return a + b;
}
//função de subtração
function subtracao(a,b){
    return a-b;
}
//funão de multiplicação
function multiplicacao(a,b){
    return a*b;
}
//funçao de divisão.
function divisao(a,b){
    if (b===0){
        //mensagem de erro caso o denominador seja 0
        console.log('Impossivel fazer uma divisão por 0!');
        return;
    } else {
        return a/b;
    }
}
let operacao; //inicialização da variavel operacao

while (true){
    operacao = prompt('Digite qual operação deseja [+] SOMA [-] SUBTRACAO [*] MULTIPLICACAO [/] DIVISAO [K] SAIR ').toLowerCase();
    if (operacao === 'k'){
        break;// encerra o loop
    }
    
    num1 = parseFloat(prompt('Digite um valor: '))
    num2 = parseFloat(prompt('Digite outro valor: '))
    //resultados
    if (operacao === '+'){
        console.log(`O resultado é ${somar(num1,num2)}`)
    } else if (operacao === '-'){
        console.log(`O resultado é ${subtracao(num1,num2)}`)
    } else if (operacao === '*'){
        console.log(`O resultado é ${multiplicação(num1,num2)}`)
    } else if (operacao === '/'){
        console.log(`O resultado é ${divisao(num1,num2)}`)
    } else {
        console.log('Comando inválido');
        return
    }
}
//mensagem de encerramento
console.log('Até a próxima!');