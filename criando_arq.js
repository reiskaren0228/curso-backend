const fs = require('fs');

//criando um arquivo .appendFile
fs.appendFile('./arquivo/texto2.txt', 'utf-8', 'Mensagem gravada com sucesso',function(err){
    if(err) throw err;
    console.log('Arquivo criado com sucesso')
});
//criando um arquivo em branco com o metodo .open()

/*fs.open('./arquivo/texto3.txt', 'w', function(err){
    if(err) throw err;
    console.log('Arquivo criado com sucesso')

});*/

// criando um novo arquivo com o metodo writeFile()
/*fs.writeFile('./arquivo/texto4.txt', 'utf-8', 'Mensagem gravada com sucesso',function(err){
    if(err) throw err;
    console.log('Arquivo criado com sucesso')
});*/
