const prompt = require("prompt-sync")();
let decisao;
let comida;
let tipo;
let continuar;

let frutas = [];
let laticinios = [];
let proteinas = [];
let doces = [];
let verduras = [];

console.log('Olá! O que deseja fazer?');
while (true){
    decisao = prompt('[1] ADICIONAR [2] REMOVER [3] ENCERRAR')
    if (decisao === '1'){
        while (true){    
            comida = prompt('Digite o nome do alimento: ');
            tipo = prompt('Digite o tipo desse alimento: [FRUTAS][LATICINIOS][PROTEINAS][DOCES][VERDURAS] ');
            categoriaComidas(tipo);
        
            continuar = prompt('Deseja continuar? [SIM/NAO]');
            if (continuar.startsWith('n')){
                break
            }    
        }
    } else if (decisao ==='2'){
        while(true){
            console.log(`Lista de compras: 
                FRUTAS: ${frutas}
                LATICINIOS: ${laticinios}
                PROTEINAS: ${proteinas}
                DOCES: ${doces}
                VERDURAS: ${verduras}`)
            comida = prompt('Digite qual comida quer remover: ');
            tipo = prompt('Digite de qual lista quer remover: ');
            removerComida(comida, tipo);

            continuar = prompt('Deseja continuar? [SIM/NAO]');
            if (continuar.startsWith('n')){
                break;
            }
        }        
    } else if (decisao ==='3'){
        break;
    }
}

console.log(`Lista de compras: 
    FRUTAS: ${frutas}
    LATICINIOS: ${laticinios}
    PROTEINAS: ${proteinas}
    DOCES: ${doces}
    VERDURAS: ${verduras}`)
console.log('Encerrando o programa!');

function categoriaComidas(tipo){
    if (tipo == 'frutas'){
        frutas.push(comida);
    } else if (tipo == 'laticinios'){
        laticinios.push(comida);
    } else if (tipo == 'proteinas'){
        proteinas.push(comida);
    } else if (tipo == 'doces'){
        doces.push(comida);
    } else if (tipo == 'verduras'){
        verduras.push(comida);
    } else {
        console.log('CATEGORIA INVÁLIDA');
    }
}

function removerComida(comida, tipo){
    if (tipo == 'frutas'){
        tipo = frutas;
    } else if (tipo == 'laticinios'){
        tipo = laticinios;
    } else if (tipo == 'proteinas'){
        tipo = proteinas;
    } else if (tipo == 'doces'){
        tipo = doces;
    } else if (tipo == 'verduras'){
        tipo = verduras;
    } else {
        console.log('CATEGORIA INVÁLIDA')
        return;
    }

    let index = tipo.indexOf(comida)
    if (index > -1) {
        tipo.splice(index, 1);
    } else {
        console.log('Não foi possível encontrar o item dentro da lista!')
    }
}