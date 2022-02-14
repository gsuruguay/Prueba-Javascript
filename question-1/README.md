# Enunciado 1

> Estás subiendo una escalera de N peldaños. En cada momento, puedes subir 1 o 2 peldaños. ¿En cuántas formas diferentes puedes subir las escalera?

# Razonamiento

Se usa la formula:
F(n) = F(n-1) + F(n-2)

Para aplicar la fórmula en una función se tiene en cuenta el hecho de que para escaleras de menos de 3 escalones las posibilidades son igual al número de escalones. Y si introduce el usuario un valor negativo para los escalones se coloca una advertencia para tal valor. Luego con un ternario se aplica la formula y muestra en consola el número de formas de subir para una escalera con los escalones enviados por parámetro en la función creada.