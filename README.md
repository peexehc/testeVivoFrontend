# Teste para desenvolvedor web Vivo - Frontend

Esta é uma PWA desenvolvida em **Vue.js** + **Nuxt.js**.
Tem como propósito listar em sua página inicial todos os repositórios do Github da globo.com, junto de suas informações de nº de stars e forks, podendendo também visualizar os commits de cada repositório em sua respectiva página.


## Instruções para instalação do projeto

``` bash
# Clone o repositório
$ git clone https://github.com/peexehc/testeVivoFrontend.git

# Instale as dependências
$ npm install

# Para iniciar o servidor de desenvolvimento utilizando o Hot Reload Module
$ npm run dev

# Para compilar para produção e iniciar o servidor
$ npm run build
$ npm start
```

O servidor estará escutando na porta 3000 - [http://127.0.0.1:3000](http://127.0.0.1:3000)

## Páginas disponíveis

### /
 
Lista todos os repositórios do Github da globo.com, paginados de 100 em 100, exibindo suas informações de nº de stars e forks. No rodapé há um botão para carregar os repositórios das próximas páginas. Ao clicar em algum repositório, o usuário é levado para a página de detalhes do projeto.

### /repositorio/*nome do repositório*

A página de detalhes do projeto exibe as informações do repositório (stars e forks) e também a lista dos commits do mesmo, páginados de 20 em 20. No rodapé há um botão para carregar os commits das próximas páginas.
