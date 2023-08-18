javascript: apex.item('P16_APAGAR').setValue('#ID_ARQUIVOS#');      
apex.server.process("PROCESS_APAGAR",         {             x01: "#ID_ARQUIVOS#",             pageItems: "#P16_APAGAR"         },         {             dataType: 'text'         }); 
apex.region("Material").refresh();
