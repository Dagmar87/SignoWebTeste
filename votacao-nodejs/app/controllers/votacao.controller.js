const db = require("../models");
const Votacao = db.votacaos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.titulo) {
    res.status(400).send({
      message: "O conteúdo não pode ficar vazio!",
    });
    return;
  }
  const votacao = {
    titulo: req.body.titulo,
    opcaoU: req.body.opcaoU,
    opcaoD: req.body.opcaoD,
    opcaoT: req.body.opcaoT,
    situacao: req.body.situacao ? req.body.situacao : false,
    dataInicio: req.body.dataInicio,
    dataFim: req.body.dataFim
  };
  Votacao.create(votacao)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu algum erro ao criar a Enquente.",
      });
    });
};

exports.findAll = (req, res) => {
  const titulo = req.query.titulo;
  var condition = titulo ? { titulo: { [Op.iLike]: `%${titulo}%` } } : null;
  Votacao.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu algum erro ao recuperar as enquentes.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Votacao.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não é possível encontrar a Enquente com id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao recuperar a Enquente com id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Votacao.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "A Enquente foi atualizada com sucesso.",
        });
      } else {
        res.send({
          message: `Não é possível atualizar a Enquente com id=${id}. Talvez Enquente não foi encontrada ou req.body está vazio!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao atualizar a Enquente com id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Votacao.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "A Enquente foi excluída com sucesso!",
        });
      } else {
        res.send({
          message: `Não é possível excluir a Enquente com id=${id}. Talvez a Enquente não tenha sido encontrada!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Não foi possível excluir a Enquente com id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Votacao.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Enquentes foram excluídas com sucesso!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Ocorreu algum erro ao remover todas as Enquentes.",
      });
    });
};
