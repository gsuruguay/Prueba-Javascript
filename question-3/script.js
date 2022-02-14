/**
 * This file would be executed with the following command:
 * $ node scritp.js
 */

/**
 * Check if a string has correct use of parenthesis.
 * 
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */

function esValidaLaExpresion(str) {
  let stack = [];
    let i = 0;
    let ultimoValorPila;
    while (i < str.length) {
        if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
            stack.push(str[i]);
        }
        if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
            if (stack.length == 0) return false;
            ultimoValorPila = stack.pop();
            if (str[i] === ")" && ultimoValorPila != "(") return false;
            if (str[i] === "]" && ultimoValorPila != "[") return false;
            if (str[i] === "}" && ultimoValorPila != "{") return false;
        }
        i++;
    }
    if (!stack.length == 0) {
        return false;
    }
  return true;
}

const validaciones = (expresion)=>{
  console.log(`La expresión: ${expresion}`);
  if (esValidaLaExpresion(expresion)) {
      console.log("Es válida");
  } else{
      console.log("Es INVÁLIDA");
  }
}

//Ejemplo de expresiones a validar
validaciones("(()");
validaciones("([(]))");
validaciones("a * (b + c(");
validaciones("a * (b + c * [d)");
validaciones("[]{}()abc{([])}");
validaciones("a * (b + c * [d])");

