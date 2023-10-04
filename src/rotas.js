const express = require('express');
const rotas = express();

const { listarInstrutores,
    obterInstrutor,
    cadastrarInstrutores,
    atualizarInstrutor,
    atualizarStatusInstrutor,
    excluirInstrutor } = require('./controladores/instrutores');

const { cadastrarAula,
    listarAulas,
    obterAula,
    obterAulasInstrutor } = require('./controladores/aulas');

const { autentificacao,
    camposVazios,
    dadosIguais,
    dadosDuplicados,
    buscarInstrutor,
    buscarInstrutorParams,
    obterAulaParams,
    isNaN,
    isNaNInstrutor } = require('./intermediadores/intermediadores')


rotas.get('/instrutores', autentificacao, listarInstrutores) // http://localhost:3000/instrutores?senhaAdmin=123 - listar todos instrutores
rotas.get('/instrutores/:id', isNaN, buscarInstrutor, obterInstrutor); // obter 1 instrutor pelo ID
rotas.post('/instrutores', camposVazios, dadosIguais, cadastrarInstrutores) // cadastro
rotas.put('/instrutores/:id', isNaN, buscarInstrutor, dadosDuplicados, camposVazios, atualizarInstrutor); // atualizar os dados de 1 instrutor
rotas.patch('/instrutores/:id/status', isNaN, buscarInstrutor, camposVazios, atualizarStatusInstrutor); // atualizar status do instrutor
rotas.delete('/instrutores/:id', isNaN, autentificacao, buscarInstrutor, excluirInstrutor); // http://localhost:3000/instrutores/IDINSTRUTOR?senhaAdmin=123 - excluir instrutor

rotas.post('/instrutores/:idInstrutor/aulas', isNaNInstrutor, buscarInstrutorParams, camposVazios, cadastrarAula); // cadastrar aula para instrutor
rotas.get('/aulas', autentificacao, listarAulas); // http://localhost:3000/aulas?senhaAdmin=123 - listagem de todas as aulas
rotas.get('/aulas/:id', isNaN, obterAulaParams, obterAula); // obter aula pelo id dela (somente 1)
rotas.get('/instrutores/:idInstrutor/aulas', isNaNInstrutor, buscarInstrutorParams, obterAulasInstrutor); // obter todas as aulas de um instrutor
module.exports = rotas