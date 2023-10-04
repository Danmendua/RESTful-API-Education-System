const { instrutores, aulas } = require('../bancodedados');

const autentificacao = (req, res, next) => {
    try {
        const senhaAdmin = "123";
        const acesso = req.query.senhaAdmin;
        if (acesso === senhaAdmin) {
            next();
        } else {
            res.status(401).json({ mensagem: 'A senha para listagem informada é inválida!' });
        }
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};


const camposVazios = (req, res, next) => {
    try {
        const bodyRequest = req.body;
        if (Object.values(bodyRequest).some(campo => (campo === null || campo === undefined) || (typeof campo === 'string' && campo.trim() === ''))) {
            return res.status(400).json({ mensagem: 'É necessário preencher todos os campos' });
        }
        next();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const dadosIguais = (req, res, next) => {
    try {
        const { nome, email } = req.body;
        if (instrutores.find((conta) => conta.email === email && conta.nome === nome)) {
            return res.status(400).json({ mensagem: 'Já existe uma conta com o nome e e-mail informado!' });
        } else {
            next();
        }
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const dadosDuplicados = (req, res, next) => {
    try {
        const { email } = req.body;
        const numeroContaAtualizando = Number(req.params.id);
        const contaExistente = instrutores.find((conta) => (conta.email === email || conta.id === numeroContaAtualizando) && conta.id !== numeroContaAtualizando);

        if (contaExistente) {
            return res.status(400).json({ mensagem: 'Já existe uma conta com o e-mail informado' });
        } else {
            next();
        }
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const buscarInstrutor = (req, res, next) => {
    const { id } = req.params;
    try {
        const instrutor = instrutores.find((elemento) => {
            return elemento.id === Number(id);
        });
        if (!instrutor) {
            return res.status(404).json({ mensagem: 'Instrutor não encontrado' });
        };
        next();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
}

const buscarInstrutorParams = (req, res, next) => {
    const { idInstrutor } = req.params;
    try {
        const instrutor = instrutores.find((instrutor) => {
            return instrutor.id === Number(idInstrutor);
        });
        if (!instrutor) {
            return res.status(404).json({ mensagem: 'Instrutor não existe' });
        }
        next();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const buscarAulasInstrutor = (req, res, next) => {
    const { idInstrutor } = req.params;
    try {
        const instrutor = instrutores.find((instrutor) => {
            return instrutor.id === Number(idInstrutor);
        });
        const aulasEncontradas = aulas.filter((aula) => {
            return aula.instrutor_id === instrutor.id
        })
        if (!aulasEncontradas) {
            return res.status(404).json({ mensagem: "Não existe essa aula" });
        }
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};


const obterAulaParams = (req, res, next) => {
    const { id } = req.params;
    try {
        const aula = aulas.find((aula) => {
            return aula.id === Number(id);
        })

        if (!aula) {
            return res.status(404).json({ mensagem: "Não existe essa aula" });
        }
        next();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const isNaN = (req, res, next) => {
    try {
        const { id } = req.params;
        if (Number.isInteger(Number(id))) {
            next();
        } else {
            return res.status(400).json({ mensagem: 'Numero da conta deve ser um número válido.' });
        }
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const isNaNInstrutor = (req, res, next) => {
    try {
        const { idInstrutor } = req.params;
        if (Number.isInteger(Number(idInstrutor))) {
            next();
        } else {
            return res.status(400).json({ mensagem: 'Numero da conta deve ser um número válido.' });
        }
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

module.exports = {
    camposVazios,
    dadosIguais,
    dadosDuplicados,
    buscarInstrutor,
    autentificacao,
    buscarInstrutorParams,
    obterAulaParams,
    isNaN,
    isNaNInstrutor

}