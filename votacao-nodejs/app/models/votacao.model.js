module.exports = (sequelize, Sequelize) => {
    const Votacao = sequelize.define("votacao", {
        titulo: {
            type: Sequelize.STRING
        },
        opcaoU: {
            type: Sequelize.STRING
        },
        opcaoD: {
            type: Sequelize.STRING
        },
        opcaoT: {
            type: Sequelize.STRING
        },
        situacao: {
            type: Sequelize.BOOLEAN
        },
        dataInicio: {
            type: Sequelize.DATEONLY
        },
        dataFim: {
            type: Sequelize.DATEONLY
        }
    });
    return Votacao;
}