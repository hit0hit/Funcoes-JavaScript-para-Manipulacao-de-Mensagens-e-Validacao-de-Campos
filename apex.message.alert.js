apex.message.alert( "The correct answer is: " + apex.item( "P2_SERVICO" ).displayValueFor( "APPLES" ) );

function show_notification(Msg){  
        apex.message.showPageSuccess(Msg); 
        $('#t_Alert_Success').addClass('u-warning');         
        $('.t-Alert-title').attr('style','color: black;font-weight: normal; font-size: 1em;');         
        $('#t_Alert_Success div div.t-Alert-icon span').removeClass('t-Icon').addClass('fa fa-2x fa-warning u-danger-text');
}

//////////////////////////////////////////////////
show_notification("The correct answer is: "  + apex.item( "P2_SERVICO" ).displayValueFor( "APPLES" ) );



/////////////////////////////////////////////////////
apex.message.clearErrors();
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
