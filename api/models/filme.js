'use strict';

module.exports = (sequelize, DataTypes) => {
  const Filme = sequelize.define('Filme', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.BOOLEAN,
    ano_lancamento: DataTypes.FLOAT,
    elenco: DataTypes.STRING
  });
  return Filme;
};