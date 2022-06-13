module.exports = app => {
    const votacaos = require("../controllers/votacao.controller.js");
    var router = require("express").Router();
    // Criar uma nova enquente
    router.post("/", votacaos.create);
    // Recuperar todas as enquentes
    router.get("/", votacaos.findAll);
    // Recuperar uma única enquente com id
    router.get("/:id", votacaos.findOne);
    // Atualizar uma enquente com id
    router.put("/:id", votacaos.update);
    // Excluir uma enquente com id
    router.delete("/:id", votacaos.delete);
    // Excluir todas as enquentes
    router.delete("/", votacaos.deleteAll);
    app.use('/api/votacaos', router);
}