let nome = prompt('Qual o seu nome? ');
let idade = prompt('Quantos anos você tem?');
let linguagem = prompt('Qual linguagem de programação você está estudando? ');

//exibe mensagem com respostas.
alert(`Olá, ${nome}. Você tem ${idade} e já está aprendendo ${linguagem}.`)

//pergunta ao usuario
let resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)

//condicional baseada nas respostas a pergunta anterior.
if (resposta == '1'){
    alert('Muito bom! Continue estudando e você terá muito sucesso.')
} else if (resposta == '2'){
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
} else {
    alert('Digite 1 ou 2!')
}