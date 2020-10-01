# CRUD para estudo usando GraphQL + NestJS + TypeORM + MYSQL

Neste repositório, trago o código fonte de uma api usando GraphQL  de operações CRUD. O objetivo deste repositório é ajudar a comunidade a se desenvolver , além de manter afiada minhas habilidades desenvolvendo usando a linguagem TypeScript.

## Versões

**01/10/2020**

- [x] Criar usuários.
- [x] Buscar todos os usuários.
- [x] Deletar usuário.
- [x] Buscar um usuário com algum parametro de busca.


## Ideias para possiveis atualizacoes 

- [ ] Validação de login e senha.
- [ ] Cadastro de produtos.
- [ ] Cadastro de clientes.

## Como usar

- Modifique o arquivo ormconfig.json para as configurações de usuário e senha do seu banco de dados.
- Use o seguinte comando: $ npm install && npm run dev.

## Querys e mutations

- Busca por todos usuários

```sh
{
users{
  id
}
}
```
- Busca por usuário especifico de acordo com id

```sh
{
  findUser(
    id:"1"
  ){
    id
    name
    email
  }
}
```

- Criação de usuários

```sh
mutation{
  createUser(
    data:{
    name:"Gustavo",
    email:"gustavoolrosa2019@gmail.com"
    }
  ){
    id
  }
}
```

- Update de usuários

```sh

mutation{
  updateUser(
    id:"1"
    data:{
      email:"updatadoemail"
      name:"updatadonome"
    }
  ){
    id
    email
    name
  }
}

```


- Delete de usuários

```sh

mutation{
  deleteUser(
    id:"1"
  )
}

```