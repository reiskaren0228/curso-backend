const fs = require('fs');

fs.rename('./arquivo/texto2.txt', './arquivo/novoArquivo.txt',function(err){
    if(err) throw err;
    console.log('Arquivo foi renomeado com sucesso!')

});