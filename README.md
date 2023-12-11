# apex.server.process
Vou fornecer uma breve descrição em Markdown para incluir no README.md:

# Atualização de Região no Oracle APEX usando JavaScript

O trecho de código JavaScript abaixo é usado para acionar um processo no Oracle APEX, passando parâmetros e atualizando uma região após a conclusão do processo.

## Código JavaScript

```javascript
// Define o valor do item P16_APAGAR com o conteúdo da variável #ID_ARQUIVOS#
apex.item('P16_APAGAR').setValue('#ID_ARQUIVOS#');

// Chama o processo PROCESS_APAGAR no servidor APEX
apex.server.process("PROCESS_APAGAR", {
    x01: "#ID_ARQUIVOS#",
    pageItems: "#P16_APAGAR"
}, {
    dataType: 'text'
});

// Atualiza a região chamada "Material"
apex.region("Material").refresh();
```

## Uso

Este código JavaScript é utilizado para realizar as seguintes ações:

1. Define o valor do item da página (`P16_APAGAR`) com o conteúdo da variável `#ID_ARQUIVOS#`.
2. Chama o processo no servidor APEX chamado `PROCESS_APAGAR`, passando parâmetros como `x01` e `pageItems`.
3. Atualiza a região chamada "Material" para refletir as alterações feitas pelo processo.

Lembre-se de ajustar os identificadores de item, processo e região conforme necessário para o seu aplicativo Oracle APEX.

```
