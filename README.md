# Boilerplate FiveM React (Javascript)

Template de React.JS e Styled Components para criação de resources para FiveM

## Custom Hooks

### useFetch
Utilização:
```javascript
// callbackName é o callback que vai ser chamado no client-side
// payload pode ser qualquer informação enviada para o client-side, pode ser um objeto, uma array, uma string, qualquer valor
useFetch("callbackName", payload);

useFetch("callbackName", payload).then(response => console.log(response));
```
```lua
RegisterNUICallback("callbackName", function(payload)
  print("Recebido: "..json.encode(payload))
end)

RegisterNUICallback("callbackName", function(payload, cb)
  print("Recebido: "..json.encode(payload))
  cb("Retornado")
end)
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

## Suporte
Entre em [contato](https://github.com/marquezzx) comigo para obter suporte.
