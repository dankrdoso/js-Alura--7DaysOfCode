const prompt = require("prompt-sync")();
//nome do usuario

let nome = prompt("Olá, como você se chama? ");

devArea();
especializacao();

let tecnologia; 
while (true){
    tecnologia = prompt('Tem alguma tecnologia que você gostaria de conhecer? Escreva o nome: ')
    let continuar = prompt('Mais alguma? [S/N] ');
    if (continuar.startsWith('n')){
        break;
    }
}
console.log(`Obrigado pelas respostas, ${nome}. Programa encerrado`)

function devArea(){
    let devArea = prompt(`Prazer, ${nome}. VocÊ tem interesse na aréa de front-end ou na área de back-end? `).toLowerCase();
    while (true){
        if(devArea.startsWith('front')){
            frontEnd();
            break; 
        } else if (devArea.startsWith('back')){
            backEnd();
            break;
        } else {
            console.log('Não entendi sua resposta! Escreva novamente! ') 
            devArea = prompt('Front-end ou Back-end?').toLocaleLowerCase(); 
        }
}   
}
function frontEnd(){
    let frontEnd = prompt('Que interessante, ótima escolha! Você gosta mais de React ou Vue?  ').toUpperCase();
    while(true){        
        if (frontEnd === 'REACT'){
            console.log('Boa! React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.')
            devArea = 'React'
            break;
        } else if(frontEnd ==='VUE'){
            console.log('Show! Vue é um ótimo framework para a criação de aplicações web!') 
            devArea = 'Vue'
            break       
        } else {
            console.log("Não entendi sua resposta! Escreva novamente! ")
            frontEnd = prompt('Você gosta mais de React ou Vue?  ').toUpperCase();            
        }
    }
}

function backEnd(){
    let backEnd = prompt('Que legal, escolha maravilhosa! VocÊ gosta mais de C# ou Java? ').toUpperCase()
    while (true){
        if (backEnd ==='C#'){
            console.log('Maravilha! C# é uma linguagem orientada a objeto e uma das cinco principais no GitHub')
            devArea = 'C#'
            break;
        } else if (backEnd === 'JAVA'){
            console.log('Boa! Java é uma linguagem rápida, segura e confiável para codificar tudo!')
            devArea = 'Java'
            break;
        } else{
            console.log('Não entendi sua resposta! Escreva novamente! ')
            backEnd = prompt('Você gosta mais de C# ou Java? ').toUpperCase();
        }
    }
}

function especializacao(){
    let especializar = prompt(`${nome}, você pretende continuar se especializando em ${devArea} [1] ou pretende se tornar FullStack [2]? `)
    while (true){
        if (especializar === '1'){
            console.log(`Tenho certeza que você será bem-sucedido ao se aprofundar em ${devArea}`);
            break;
        } else if (especializar ==='2'){
            console.log('Tenho certeza que você é capaz de trabalhar nas mais diversas ativdades e será muito valorizado!')
            break;
        } else {
            espeOuFullStack = prompt(`Escolha [1] caso queira se especializar em ${devArea} ou [2] se tem interessar em virar FullStack `)
        }
    }
}
