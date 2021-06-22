# Pokemon Game Help API

## Instalação

1 - `git clone https://github.com/guvitorino/PokemonGameHelpAPI.git `

2 - Criar arquivo **.env** de acordo com o arquivo **.env.example**

3 - Colocar em **MONGO_URL** `MONGO_URL=mongodb://mongo:27017/Pokemon`

4 - `docker-compose build .`

5 - `docker-compose up`

6 - `docker exec -it pokemon-game-help npm run seed`


## Documentação

Executar `npm run doc` e acessar [http://localhost:3333/doc/#/](http://localhost:3333/doc/#/), a porta pode mudar de acordo com o que for setado no env, a porta 3333 é a padrão

## Comentários

Busquei fazer de maneira simples e fácil, utilizei as ferramentas que já estou mais ambientado. Por isso escolhei utiliza Javascript com Node.js para desenvolver. Foi utilizado o eslint para padronização do código utilizando o padrão standard.

    Libs 
     - Express - por facilitar a criação de API de forma rápida e simples
  
     - Mongoose - para acesso ao MongoDB, foi escolhido por facilitar e fazer essa interface com o banco, facilitando o desenvolvimento
  
     - mongoose-paginate-v2 - foi escolhido para ajudar na páginação dos documentos, simplificando o desenvolvimento também
  
     - Celebrate - simplifica a validação dos parametros necessários nas rotas, desde body até a query, dessa forma economizando codificação

     - Swagger - permite a geração da documentação da API de forma facil e simples

### Código

Para facilitar e não ser algo tão complexo utilizei uma estrutura padrão MVC, separando o código na seguinte estrutura de pastas:
    
    - src/
      - controllers/
      - database/
      - models/
        - entity/
        - bo/
        - repository/
      - routes/
      - scripts/

- controllers  
No geral dividi o código para Pokemon e Team, então temos dois controllers separados para responder para os endpoints que estão ligados a cada um. As controllers apenas leem os paramêtros e os repassam para as BO's e de acordo com o que acontecer responde os documentos, a operação é dentro de um try catch para o caso de ocorrer alguma exceção onde a api deve retornar erro 500.

- database  
Possui apenas configuração de conexão do moongoose com o mongodb

- models  
Foi dividido em entity onde está contido a montagem dos schemas a serem utilizados, repository que faz a interface dos metódos do mongoose como por exemplo o find e a bo onde são as classes que fazem a aplicação de alguma regra que seja necessária tanto para a chamada para busca quanto para os dados retornados

- routes  
Onde é feita a configuração das rotas que vão estar disponiveis na API, para cada dominio há uma configuração separada, ou seja, para pokemon a uma configuração separada e para team há outra, nesses arquivos também é onde é configurado as validações dos paraêtros pelo celebrate

- scripts  
É onde é colocado os scripts necessários, foi colocado nele o script para alimetar o banco com os dados dos pokemons

### Banco

Escolhi o MongoDB por ser simples para inserir os dados que já estavam em um formato JSON, e também por que não tinha nenhum tipo de relacionamento que realmente necessitasse a utilização de algum banco relacional. 

### Endpoints

- /pokemon/list
  - A mesma rota eu consigo listar e filtrar de acordo com os paramêtros, por isso o queryBy para ser informado o qual o campo que foi escolhido para filtrar o dado, criteria que é o parametro para filtrar os dados na query, os outros paramêtros é o limit e o page que é para a paginação dos dados

- /team
  - Rota para a criação dos times, recebe dois parametros que é o nome e a lista de pokemons da equipe
  

# Considerações finais
Projeto bem legal de se fazer e colocar um pouco do conhecimento em pratica, no geral acredito que consegui demonstrar um pouco da minha codificação. Agradeço a oportunidade