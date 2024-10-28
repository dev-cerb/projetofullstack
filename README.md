# PROJETO AINDA EM CONSTRUÇÃO ...

## Sobre o projeto:

Este projeto tem por objetivo facilitar a vida cotidiana do usuário, realizando anotações e tarefas a serem realizadas.

### Tecnologias utilizadas:

<ul>
<li>Javascript</li>
<li>NodeJs</li>
<li>MySql</li>
<li>Sequelize</li>
<li>Express</li>
<li>JsonWebToken</li>
<li>NextJs</li>
<li>React</li>
<li>Axios</li>
</ul>

### Rodando o projeto

Crie um arquivo .env na raiz do projeto que deve conter as seguintes informações:

DATABASE= Nome do BD

DATABASE_HOST= Host do BD

DATABASE_PORT= Porta do BD

DATABASE_USERNAME= Nome do BD

DATABASE_PASSWORD= Senha do BD

SECRET = Segredo que será utilizado pelo JWT

BASE_URL = 'URL'

SERVER_PORT = 'Porta do servidor'

Após isso, realizar o comando "npx sequelize-cli db:migrate" para realizar a migração das tabelas.

Para rodar o servidor, entre na pasta backend e utilize npm run dev

Para rodar o frontend, entre na pasta frontend/my-app e utilize npm run dev
