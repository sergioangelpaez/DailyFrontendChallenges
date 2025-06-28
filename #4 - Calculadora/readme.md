# Reto del Día 5: Calculadora Simple

---

## Objetivo

Crea una aplicación web que funcione como una calculadora básica, permitiendo al usuario realizar operaciones de suma, resta, multiplicación y división entre dos números.

---

## Duración Estimada

3 - 4 horas

---

## Requisitos Funcionales

* La interfaz debe tener **dos campos de entrada de número** (inputs) donde el usuario pueda introducir los operandos.
* Debe haber **cuatro botones** para las operaciones básicas: **Suma (`+`)**, **Resta (`-`)**, **Multiplicación (`*`)** y **División (`/`)**.
* Debe haber un área donde se **muestre el resultado** de la operación.
* Al hacer clic en un botón de operación, la calculadora debe:
    * Leer los valores de los dos campos de entrada.
    * Realizar la operación seleccionada.
    * Mostrar el resultado en el área designada.
* La aplicación debe manejar **casos de error básicos**:
    * Si los campos de entrada están vacíos, mostrar un mensaje de error.
    * Si se intenta dividir por cero, mostrar un mensaje de error adecuado.

---

## Aspectos a Considerar y Preguntas Guía

### Obtención y Conversión de Valores

* ¿Cómo obtendrás los valores de los campos de entrada de texto?
* Los valores de los inputs se obtienen como *strings*. ¿Cómo los **convertirás a números** para poder realizar operaciones matemáticas con ellos? ¿Qué funciones de JavaScript puedes usar para esto?
* ¿Qué sucede si el usuario ingresa algo que no es un número (ej. "hola")? ¿Cómo podrías manejar eso?

### Lógica de Operaciones

* ¿Cómo estructurarías las funciones para cada operación (suma, resta, etc.)?
* ¿Cómo decidirías qué operación realizar basándote en el botón que el usuario ha clicado? ¿Necesitarías una función general que maneje el clic de cualquier botón de operación y luego decida qué hacer?

### Manejo de Errores y Retroalimentación al Usuario

* ¿Cómo verificarías si los inputs están vacíos?
* Para la división por cero, ¿qué condición usarías para detectarla antes de que ocurra el error?
* ¿Dónde y cómo mostrarías los mensajes de error al usuario? ¿Quizás un `<span>` como en el reto anterior?

### Estructura del Código

* ¿Sería útil tener una función que agrupe la lógica de "obtener valores, convertir, validar, realizar operación y mostrar resultado"?
* ¿Cómo organizarías tus `addEventListener` para los cuatro botones de operación?

---

## Tips y Consejos

* **Conversión de Tipos:**
    * `parseFloat()`: Convierte una cadena a un número de punto flotante (decimal).
    * `parseInt()`: Convierte una cadena a un número entero.
    * Operador unario `+`: Una forma rápida de convertir una cadena a un número (ej. `+myString`).
    * `Number()`: Convierte un valor a tipo número.
    * `isNaN()`: Una función útil para verificar si un valor "no es un número" después de un intento de conversión.
* **Encapsula la Lógica:** Para cada operación, piensa en una función pequeña y específica. Luego, una función más grande que coordine la lectura de inputs, la validación y la llamada a la operación correcta.
* `console.log()`: Es tu mejor amigo para verificar los valores en cada etapa: después de obtenerlos de los inputs, después de convertirlos a números y antes/después de cada operación.
* **Documentación Oficial**: Como siempre, la [MDN Web Docs](https://developer.mozilla.org/es/) es tu recurso principal. Busca específicamente sobre:
    * [`parseFloat()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) y [`parseInt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
    * [`isNaN()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
    * `HTMLInputElement.value`: Para obtener el texto de los campos de entrada.
    * `EventTarget.addEventListener()`: Para los clics de los botones.