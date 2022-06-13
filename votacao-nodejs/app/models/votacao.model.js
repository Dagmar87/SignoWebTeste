module.exports = (sequelize, Sequelize) => {
    const Votacao = sequelize.define("votacao", {
        titulo: {
            type: Sequelize.STRING
        },
        dataInicio: {
            type: Sequelize.DATEONLY,
            defaultValue: 'DD-MM-YYYY',
            field: 'dataInicio'
        },
        dataFim: {
            type: Sequelize.DATEONLY,
            defaultValue: 'DD-MM-YYYY',
            field: 'dataFim'
        },
        resOp1: {
            type: Sequelize.STRING
        },
        resOp2: {
            type: Sequelize.STRING
        },
        resOp2: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });
    return Votacao;
}