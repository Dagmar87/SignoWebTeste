# SignoWebTeste
Teste do processo seletivo da SignoWeb

Nome: José Dagmar Florentino da Silva Sobrinho

Obs: O banco de dados utilizado neste projeto foi PostgreSQL, devido o MySQL não está funcionando direto. 

Para rodar a parte de back-end do projeto:

node server.js

Para criar e rodar o banco de dados do projeto:

sudo -u postgres createdb votacaodb
psql -h localhost -U postgres -d votacaodb
select * from votacaos;

Para rodar a parte de front-end do projeto:

ng serve --port 8081 
