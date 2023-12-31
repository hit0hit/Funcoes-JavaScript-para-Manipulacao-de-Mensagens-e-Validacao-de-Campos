# Funções JavaScript para Manipulação de Mensagens e Validação de Campos

A seguir estão alguns exemplos de funções JavaScript utilizadas para manipular mensagens e validar campos no Oracle APEX.

## Exemplo de Exibição de Alerta

```javascript
// Exibe um alerta com a resposta correta baseada no valor do item P2_SERVICO
apex.message.alert("The correct answer is: " + apex.item("P2_SERVICO").displayValueFor("APPLES"));
```

## Função para Exibir Notificação Personalizada

```javascript
function show_notification(Msg){  
    apex.message.showPageSuccess(Msg); 
    $('#t_Alert_Success').addClass('u-warning');         
    $('.t-Alert-title').attr('style','color: black;font-weight: normal; font-size: 1em;');         
    $('#t_Alert_Success div div.t-Alert-icon span').removeClass('t-Icon').addClass('fa fa-2x fa-warning u-danger-text');
}

// Exibe uma notificação personalizada
show_notification("The correct answer is: "  + apex.item("P2_SERVICO").displayValueFor("APPLES"));
```

## Validação de Campos e Exibição de Erros

```javascript
// Limpa os erros existentes
apex.message.clearErrors();

// Validação do campo P2_SERVICO
if (apex.item("P2_SERVICO").isEmpty()) {
    apex.message.showErrors([
        {
            type: "error",
            location: ["page", "inline"],
            pageItem: "P2_SERVICO",
            message: "O nome é obrigatório!",
            unsafe: false
        }
    ]);
}

// Validação do campo P2_QTD
if (apex.item("P2_QTD").isEmpty()) {
    apex.message.showErrors([
        {
            type: "error",
            location: ["page", "inline"],
            pageItem: "P2_QTD",
            message: "A quantidade é obrigatória!",
            unsafe: false
        }
    ]);
}

// Validação do campo P2_VALOR
if (apex.item("P2_VALOR").isEmpty()) {
    apex.message.showErrors([
        {
            type: "error",
            location: ["page", "inline"],
            pageItem: "P2_VALOR",
            message: "O valor é obrigatório!",
            unsafe: false
        }
    ]);
}
```

Lembre-se de adaptar as mensagens, identificadores de itens e lógica de validação conforme necessário para atender aos requisitos específicos do seu aplicativo Oracle APEX.
```

Essa documentação fornece uma visão geral do propósito e funcionamento de cada trecho de código JavaScript. Certifique-se de personalizar conforme necessário para o seu contexto específico.


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


