grammar Calculator;

programa: instrucciones;

instrucciones
    : instruccion
    | instrucciones instruccion
    ;

instruccion: decision;

decision
    : 'if' '(' condicion ')' '{' sentencias '}' ('else' '{' sentencias '}')?
    ;

sentencias
    : sentencia+
    ;

sentencia
    : salida
    | terminar
    ;

salida
    : 'printf' '(' cadena ')' ';'
    ;

terminar
    : 'return' ';'
    ;

condicion
    : '0'
    | '1'
    ;

cadena
    : '"' caracteres '"'
    ;

caracteres
    : caracter+
    ;

caracter
    : LETRA
    | DIGITO
    | SIMBOLO
    ;

LETRA   : [a-zA-Z];
DIGITO  : [0-9];
SIMBOLO : [,.!?:" ];

WS: [ \t\r\n]+ -> skip;
