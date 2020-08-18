// Este codigo faz a leitura de dados para apps coletadas do Google Play

const fs = require('fs');
const csvparse = require('csv-parse/lib/sync');

// Le cada linha do arquivo csv como um objeto e armazena no array 'app'
let apps = csvparse(fs.readFileSync('./gplaydata.csv', 'utf-8'), {
    columns: true,
    delimiter: ',',
    skip_empty_lines: true
});
// converte alguns atributos que sao inicialmente lidos com strings
apps = apps.map(elem => {
    elem.score = parseFloat(elem.score);
    elem.installs = parseInt(elem.installs);
    elem.androidVersion = parseFloat(elem.androidVersion);
    return elem;
});

console.log('Total de objetos deste array:', apps.length);
console.log('A estrutura do 1.o objeto:');
console.log(apps[0]);

// EXERCICIO 1: use reduce() para calcular o numero total de installs para todas as apps.

const nInstalls = apps.reduce((acc, elem) =>{
    let somaInstalls = acc;
    somaInstalls = somaInstalls + elem.installs;
    return somaInstalls;
}, 0);
console.log('Numero total de intalações');
console.log(nInstalls);

// EXERCICIO 2: use filter() para selecionar somente apps com score maior que quatro (> 4) 

const nota4 = apps.filter((elem) =>{
    return elem.score > 4;
});
console.log('Apps com nota maior que 4');
console.log(nota4);


// EXERCICIO 3: use map() para mudar o atributo appname para lowerCase

apps = apps.map(elem =>{
    elem.appname = elem.appname.toLowerCase();
    return elem;
});
console.log('Mudar o atributo appname para lowerCase---------------------------------------------------');
console.log(apps);


