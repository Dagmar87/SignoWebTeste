module.exports = app => {
    const votacoes = require("../controllers/votacao.controller.js");
    var router = require("express").Router();
    // Criar uma nova enquente
    router.post("/", votacoes.create);
    // Recuperar todas as enquentes
    router.get("/", votacoes.findAll);
    // Recuperar uma única enquente com id
    router.get("/:id", votacoes.findOne);
    // Atualizar uma enquente com id
    router.put("/:id", votacoes.update);
    // Excluir uma enquente com id
    router.delete("/:id", votacoes.delete);
    // Excluir todas as enquentes
    router.delete("/", votacoes.deleteAll);
    app.use('/api/votacoes', router);
}