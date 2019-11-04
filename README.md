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

- MovieController.index (Usado para filtrar os filmes desejados a partir do gênero).
- MovieController.delete (Deletar um determinado filme do banco de dados de acordo com _id gerado pelo MongoDB).
- MovieController.store (Persistir determinado filme no banco de dados).
- DashboardController.index (Listar todos os filmes do banco de dados).

Exemplos de casos de uso:
- Deseja-se catalogar determinados filmes em uma página web.
- Cadastrar filmes contidos em determinado site de download de filmes.

## Tecnologias usadas

- Javascript - Linguagem de programação.
- Express - Miniframework do ambiente Nodejs.
- MongoDB - Banco de dados não relacional.

## Autor

- Guilherme Faleiros de Siqueira - Developer - guilhermefaleiros.



