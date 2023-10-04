let { identificadorAula, instrutores, aulas } = require('../bancodedados');

const cadastrarAula = (req, res) => {
    const { idInstrutor } = req.params;
    const { titulo, descricao } = req.body;
    try {
        const aula = {
            id: identificadorAula++,
            instrutor_id: Number(idInstrutor),
            titulo,
            descricao
        }
        aulas.push(aula)
        return res.status(201).json(aula);
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const listarAulas = (req, res) => {
    return res.status(200).json(aulas);
}

const obterAula = (req, res) => {
    const { id } = req.params;
    try {
        const aula = aulas.find((aula) => {
            return aula.id === Number(id);
        })
        return res.status(200).json(aula);
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
}

const obterAulasInstrutor = (req, res) => {
    const { idInstrutor } = req.params;
    try {
        const instrutor = instrutores.find((instrutor) => {
            return instrutor.id === Number(idInstrutor);
        });
        const aulasEncontradas = aulas.filter((aula) => {
            return aula.instrutor_id === instrutor.id
        })

        return res.status(200).json(aulasEncontradas);
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
}

module.exports = {
    cadastrarAula,
    listarAulas,
    obterAula,
    obterAulasInstrutor
}