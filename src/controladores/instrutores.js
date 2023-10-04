let { instrutores, identificadorInstrutor } = require('../bancodedados');

const listarInstrutores = (req, res) => {
    return res.status(200).json(instrutores);
}
const obterInstrutor = (req, res) => {
    const { id } = req.params;
    try {
        const instrutor = instrutores.find((elemento) => {
            return elemento.id === Number(id);
        });
        return res.status(200).json(instrutor);
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const cadastrarInstrutores = (req, res) => {
    const { nome, email, status } = req.body;
    try {
        const instrutor = {
            id: identificadorInstrutor++,
            nome,
            email,
            status: status ?? true
        }
        instrutores.push(instrutor);
        return res.status(201).json(instrutor);
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const atualizarInstrutor = (req, res) => {
    const { id } = req.params;
    const { nome, email, status } = req.body;
    try {
        const instrutor = instrutores.find((elemento) => {
            return elemento.id === Number(id)
        });

        instrutor.nome = nome;
        instrutor.email = email;
        instrutor.status = status;
        return res.status(204).send();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const atualizarStatusInstrutor = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const instrutor = instrutores.find((elemento) => {
            return elemento.id === Number(id);
        });
        instrutor.status = status;
        return res.status(204).send();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const excluirInstrutor = (req, res) => {
    const { id } = req.params;
    try {
        instrutores = instrutores.filter((instrutor) => {
            return instrutor.id !== Number(id);
        });
        return res.status(204).send();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

module.exports = {
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutores,
    atualizarInstrutor,
    atualizarStatusInstrutor,
    excluirInstrutor
};