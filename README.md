## Sobre o projeto
- Se trata de uma API que lida com a conexão com um servidor do MongoDB Atlas que permite a recuperação de dados de filmes e realiza um filtro por gênero.

## Pré-requisitos

- Ter instalado o Gerenciador de Pacotes do Nodejs (npm).

## Instalação
- Primeiramente, baixe ou clone o arquivo.

- Entre na pasta do arquivo pelo terminal e execute o comando:

```
npm install
```

- Após concluída a instação, utilize o comando:

```
npm run dev
```

- A partir deste momento, API já estará disponível para ser consumida.

## Uso

A API possui 4 métodos principais:
    - MovieController.index -> Realiza o filtro dos filmes de acordo com o gênero escolhido. (GET)
    - MovieController.delete -> Deleta um registro de filme de acordo com o _id gerado pelo MongoDB ao ser registrada. (DELETE)
    - MovieController.store -> Realiza a persistência de um novo filme no banco de dados. (POST)
    - DashboardController.index -> Lista TODOS os filmes do banco de dados. (GET)

## Tecnologias usadas

- Javascript - Linguagem de programação.
- Express - Miniframework do ambiente Nodejs.
- MongoDB - Banco de dados não relacional.

## Autor

- Guilherme Faleiros de Siqueira - Developer - guilhermefaleiros.



