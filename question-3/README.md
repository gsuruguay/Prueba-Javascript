# Enunciado 3

> Implementar un método de verificación lógica de paréntesis. Es decir, implementar el método `parenthesisChecker(str)` que recibe un `string` como parámetro y devuelve un `boolean`. La respuesta del método debe ser `true` si la cadena de `string` es válida en términos de paréntesis (`( )`, `[ ]`, `{ }`), i.e. cada apertura de paréntesis se cierra correctamente. A continuación se muestran ejemplos de `string` válidos e inválidos.
> 
> **Ejemplos válidos**: la función debe devuelve `true`.
>
> - `parenthesisChecker('a * (b + c)')` → `true`
> - `parenthesisChecker('a * (b + c * [d])')` → `true`
> - `parenthesisChecker('[]{}()abc{([])}')` → `true`
>
> **Ejemplos válidos**: la función debe devuelve `false`.
>
> - `parenthesisChecker('(()')` → `false`
> - `parenthesisChecker('(([))')` → `false`
> - `parenthesisChecker('([)]')` → `false`

# Razonamiento

_Escribir aquí los supuestos asumidos, reflexiones y explicaciones de la solución_

1- Existe un orden logico de apertura y cierre de las llaves, osea una correspondencia
de que cuando una abra, en otra parte debe cerrarse.
2- Para verificar ese orden debe recorrerse toda la cadena carácter por carácter.
3- Cada vez que se encuentre una llave, paréntesis o corchete debe agregarse a un array, y cuando se encuentre la que cierra se la sacaria de ese array.
4- Cada vez que se encuentre una llave, paréntesis o corchete que cierre, debe corresponder al orden lógico de aparición de su apertura. 
5- Al final de recorrer la cadena se verifica que el array haya quedado vacio, de lo contrario significa que hay llave, paréntesis o corchetes sin cerrar.
6- Si tengo un elemento de cierre y el array esta vacio es un error y debo cortar la evaluación retornando falso.
7- Para la resolución se emplea una función que recibe por parámetro la expresión a evaluar y se recorre la misma con un bucle while. Se crean las variables que funcionan como Array contenedor (stack), contador de ciclos (i) y otra donde se almacena el último valor que va a sacarse del array porque se encontró su correspondiente carácter de cierre. En la iteración se evalua si existen llaves, paréntesis o corchetes que aperturen y se las va agregando al array contenedor. Luego se evalua si existen llaves, paréntesis o corchetes que cierren, y en caso de afirmativo, se verifica que el array contenedor no esté vacio, de lo contrario es una expresión inválida. Siguiendo con la ejecución y habiendo encontrado el caracter de cierre, se procede a eliminar ese último carácter de apertura agregado al array contenedor y se almacena en una variable para luego usarla en otros condicionales y verificar el orden lógico de cierre de su correspondiente llave, paréntesis o corchete. Si esta condición falla significa que existe un error de correspondencia y por lo tanto la expresión no es válida (Para casos por ejemplo donde tenemos asi "(([)"). Se verifica luego que el array contenedor haya quedado vacio pues si luego de las validaciones aún hay caracteres almacenados en el array es porque no se encontraron sus correspondientes cierres, ahi retornariamos un false.
Si pasa todas las validaciones correctamente la función retorna true, es decir, que la expresión si es válida.
