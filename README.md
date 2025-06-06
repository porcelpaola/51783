# Analizador Sintáctico con ANTLR4 + JavaScript

Este proyecto utiliza ANTLR4 y Node.js para construir un analizador de una versión reducida del lenguaje C que procesa estructuras condicionales `if-else`, instrucciones `printf` y `return`.

# Requisitos previos
- Node.js 16 o superior
- Java (JRE) 1.8 o superior
- ANTLR 4.13.2
- Dependencia `antlr4` instalada con:
  ```bash
  npm install antlr4

# Estructura del Proyecto

Porcel Paola 51783/
├── Analyzer/
│   ├── .antlr/
│   ├── .vscode/
│   │   └── launch.json
│   ├── generated/
│   │   ├── CalculatorLexer.js
│   │   ├── CalculatorParser.js
│   │   ├── CalculatorVisitor.js
│   │   ├── Calculator.tokens
│   │   └── CalculatorLexer.tokens
│   ├── node_modules/
│   ├── antlr-4.13.2-complete.jar
│   ├── Calculator.g4
│   ├── index.js
│   ├── input.txt
│   ├── package.json
│   └── package-lock.json
├── input-correcto1.txt
├── input-correcto2.txt
├── input-incorrecto1.txt
├── input-incorrecto2.txt
├── reglas.pdf
└── README.md

# CLONAR REPOSITORIO 

git clone https://github.com/porcelpaola/51783

Para entrar al directorio del proyecto clonado escribir en terminal:
cd 51783 

Luego, para abrir esa carpeta en VS code:
code .
O bien, si code no funciona, abrír VS Code manualmente, luego hacer clic en “Archivo > Abrir carpeta” y seleccioná la carpeta 51783.

# INSTRUCCIONES PARA EJECUTAR

Para entrar a la subcarpeta donde está el código, en terminal cmd escribir:
cd Analyzer 

Luego, para analizar un archivo de entrada escribir:
npm start

Esto generará dos en la consola una tabla con todos los lexemas encontrados en el archivo input.txt junto a su tipo de token y una representación textual del árbol generado por el parser.

Ejemplo:
 
Si input.txt contiene:

if(1){
  printf("Hola mundo!");
} else {
  return;
}

se genera:

Tabla de Tokens y Lexemas:
-------------------------------------------
| Lexema            | Token                |
-------------------------------------------
| if                 | 'if'                 |
| (                  | '('                  |
| 1                  | '1'                  |
| )                  | ')'                  |
| {                  | '{'                  |
| printf             | 'printf'             |
| (                  | '('                  |
| "                  | '"'                  |
| H                  | LETRA                |
| o                  | LETRA                |
| l                  | LETRA                |
| a                  | LETRA                |
|                    | SIMBOLO              |
| m                  | LETRA                |
| u                  | LETRA                |
| n                  | LETRA                |
| d                  | LETRA                |
| o                  | LETRA                |
| !                  | SIMBOLO              |
| "                  | '"'                  |
| )                  | ')'                  |
| ;                  | ';'                  |
| }                  | '}'                  |
|                    | SIMBOLO              |
| else               | 'else'               |
|                    | SIMBOLO              |
| {                  | '{'                  |
| return             | 'return'             |
| ;                  | ';'                  |
| }                  | '}'                  |
-------------------------------------------

Árbol de análisis sintáctico:
(programa (instrucciones (instruccion (decision if ( (condicion 1) ) { (sentencias (sentencia (salida printf ( (cadena " (caracteres (caracter H) (caracter o) (caracter l) (caracter a) (caracter  ) (caracter m) (caracter u) (caracter n) (caracter d) (caracter o) (caracter !)) ") ) ;))) }))))

Para generar el árbol de derivación utilizando el plugin de ANTLR para Visual Studio Code dirigirse al menú de la barra superior, hacer clic en "Ejecutar" y luego seleccionar "Iniciar depuración".

Para analizar el resto de los ejemplos modificar el archivo input.txt colocando cualquiera de los archivos de texto (input_correcto2, input_incorrecto1, input_incorrecto2).

