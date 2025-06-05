import antlr4 from 'antlr4';
import fs from 'fs';
import CalculatorLexer from './generated/CalculatorLexer.js';
import CalculatorParser from './generated/CalculatorParser.js';
import CalculatorVisitor from './generated/CalculatorVisitor.js';

// Leer input
const input = fs.readFileSync('./input.txt', 'utf8');
console.log("Analizando archivo...\n");

// Crear flujo de caracteres
const chars = new antlr4.InputStream(input);

// Crear lexer y token stream
const lexer = new CalculatorLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

// Mostrar tabla de tokens y lexemas
tokens.fill();
console.log("Tabla de Tokens y Lexemas:");
console.log("-------------------------------------------");
console.log("| Lexema            | Token                |");
console.log("-------------------------------------------");

tokens.tokens.forEach(token => {
    if (token.type !== -1) {
        const tokenName =
            CalculatorLexer.symbolicNames[token.type] ||
            CalculatorLexer.literalNames[token.type] ||
            'null';
        const lexema = token.text;
        console.log(`| ${lexema.padEnd(18)} | ${tokenName.padEnd(20)} |`);
    }
});
console.log("-------------------------------------------");

// Crear parser
const parser = new CalculatorParser(tokens);
parser.buildParseTrees = true;

// Agregar listener de errores
class ErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
        console.error(`X Error en línea ${line}, columna ${column}: ${msg}`);
    }
}
parser.removeErrorListeners();
parser.addErrorListener(new ErrorListener());
lexer.removeErrorListeners();
lexer.addErrorListener(new ErrorListener());

// Parsear desde la regla inicial
const tree = parser.programa();

// Mostrar el árbol
console.log("\nÁrbol de análisis sintáctico:");
console.log(tree.toStringTree(parser.ruleNames));

// Visitor personalizado básico
class Interpreter extends CalculatorVisitor {
    visitPrograma(ctx) {
        return this.visitChildren(ctx);
    }

    visitInstrucciones(ctx) {
        return this.visitChildren(ctx);
    }

    visitInstruccion(ctx) {
        return this.visitChildren(ctx);
    }

    visitDecision(ctx) {
        return this.visitChildren(ctx);
    }

    visitSentencia(ctx) {
        return this.visitChildren(ctx);
    }

    visitSalida(ctx) {
        return this.visitChildren(ctx);
    }

    visitTerminar(ctx) {
        return this.visitChildren(ctx);
    }

    visitCondicion(ctx) {
        return this.visitChildren(ctx);
    }

    visitCadena(ctx) {
        return this.visitChildren(ctx);
    }
}

// Ejecutar el visitor
const visitor = new Interpreter();
visitor.visit(tree);
