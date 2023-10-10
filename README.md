# Boilerplate FiveM React & Tailwind (Javascript)

Template de React.JS e Tailwind para criação de resources para FiveM

> Tópicos: [Configuração](#configuração), [Hooks](#hooks), [Instalação](#instalação), [.eslintrc.cjs](#eslint), [Suporte](#suporte)

## Configuração

A configuração é simples, para funcionar apenas altere resName em `src/config/config.js` para funcionar perfeitamente

## Hooks

### useFetch
Utilização:
```javascript
// callbackName é o callback que vai ser chamado no client-side
// payload pode ser qualquer informação enviada para o client-side, pode ser um objeto, uma array, uma string, qualquer valor
// awaitResponse é um booleano, ele aguarda um valor retornado pelo client
useFetch("callbackName", payload);
useFetch("callbackName", payload, true).then(response => console.log(response));
```
```lua
-- é necessário sempre retornar uma response caso awaitResponse seja enviado como true na função acima
-- mesmo sendo um valor nulo ou indefinido, pode retornar response({})
RegisterNUICallback("callbackName", function(payload, response)
  print("Recebido: "..json.encode(payload))
  response("Retornado")
end)
```

### useNavigate
Utilização:
```javascript
// este é um hook para facilitar o uso das rotas, para poupar tempo na hora de trabalhar com muitas páginas
useNavigate("/novaRota");
```

## Instalação

Faça a instalação do repositório, abra o Prompt de Comando no caminho do arquivo
Comandos de execução:

### NPM
```sh
npm install
npm run dev
```

### YARN
```sh
yarn
yarn dev
```

## eslint

São definidas por padrão no `.eslintrc.cjs` as regras: 

```
react-refresh/only-export-components - Aviso
react-hooks/rules-of-hooks - Desligado
react-hooks/exhaustive-deps - Desligado
no-unused-vars - Desligado
react/prop-types - Desligado
```

## Suporte
Entre em contato comigo pelo Discord (@marquezdev) para obter suporte.
