const fs = require('fs');

fs.unlink('./arquivo/novoArquivo.txt', function(err){
    if(err) throw err;
    console.log('Arquivo foi deletado com sucesso!')

});