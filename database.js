const {Sequelize, DataTypes} = require('sequelize');
const express = require('express');
const app = express();
const PORTA = 3307;

// Configuração da conexão com o banco de dados SQLite
const sequelize = new Sequelize('jogo_caça_palavras', 'root', 'codeclass', {
    host: 'localhost',//onde o banco de dados está sendo executado
    dialect: 'mariadb',
    port: 3307 //porta para o banco de dados
})

  // Definindo o modelo para a tabela 'Palavras'
  const Palavra = sequelize.define('Palavra', {
    palavra: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dica: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  // Sincroniza o modelo com o banco de dados
  (async () => {
    await sequelize.sync({ force: true }); // Use { force: true } para recriar as tabelas (cuidado com os dados existentes)
    console.log('Tabelas sincronizadas.');
  })();
  
  
  app.listen(PORTA, () =>{
    console.log('Servidor Rodando na porta', PORTA);
});

// Após criar o modelo 'Palavra', você pode inserir as palavras no banco de dados
const { palavra } = require('./database'); // Importe o modelo do seu banco de dados

// Insira as palavras na grade
for (const palavra of palavraFacil) {
  inserirPalavra(gradeFacil, palavra, "horizontal");
  // Insira a palavra no banco de dados
  Palavra.create({
    palavra: palavra,
    dica: "Dica para " + palavra, // Substitua pela dica apropriada
  }).then((palavraInserida) => {
    console.log(`Palavra '${palavraInserida.palavra}' inserida no banco de dados.`);
  }).catch((error) => {
    console.error('Erro ao inserir palavra no banco de dados:', error);
  });
}

