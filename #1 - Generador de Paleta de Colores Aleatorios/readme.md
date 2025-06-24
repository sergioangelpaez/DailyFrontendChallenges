# Reto del Día: Generador de Paleta de Colores Aleatorios

## Objetivo

Crea una página web sencilla que muestre una paleta de 5 colores aleatorios. Cada color debe estar representado por un cuadro y su código hexadecimal. Debe haber un botón para generar una nueva paleta al hacer clic.

## Duración Estimada

1 - 2 horas

## Requisitos Funcionales

* La página debe mostrar al menos **5 cuadros** (elementos `div` o similares).
* Cada cuadro debe tener un **color de fondo diferente y generado aleatoriamente**.
* Dentro de cada cuadro, debe mostrarse el **código hexadecimal del color** que representa (ej: `#RRGGBB`).
* Debe haber un **botón** en la página.
* Al hacer clic en el botón, se debe **generar una nueva paleta de 5 colores aleatorios** y actualizar la visualización en la página.

---

## Aspectos a Considerar y Preguntas Guía

### Generación de Colores Hexadecimales

* ¿Cómo puedes crear un `string` que represente un color hexadecimal de forma aleatoria (ej: `#a3b2c1`)? Piensa en los caracteres que forman un hexadecimal.

### Manipulación del DOM

* ¿Cómo seleccionas el contenedor donde se mostrarán los colores?
* ¿Cómo creas nuevos elementos HTML (los cuadros de color y el texto del código) dinámicamente con JavaScript?
* ¿Cómo asignas estilos CSS (como el color de fondo) a estos elementos usando JavaScript?
* ¿Cómo añades estos elementos recién creados al DOM?
* ¿Cómo seleccionas el botón y le asignas un "escuchador de eventos" para que reaccione al clic?

### Estructura del Código

* ¿Sería útil encapsular la lógica de generación de un solo color en una función?
* ¿Cómo organizarías tu código para que la lógica de "generar nueva paleta" sea clara y reutilizable?
* ¿Necesitarás una función para crear y actualizar los elementos visuales en el DOM?

---

## Tips y Consejos

* **Empieza Simple**: Primero, enfócate en generar un solo color aleatorio y mostrarlo. Luego, expande para generar 5. Después, trabaja en el botón.
* `console.log()`: Tu mejor amigo para depurar. Úsalo para inspeccionar valores y el flujo del programa.
* **Documentación Oficial**: Si te encuentras atascado con una función específica o un concepto, la [MDN Web Docs](https://developer.mozilla.org/es/) es una fuente invaluable. Te recomiendo buscar allí. Por ejemplo, podrías buscar:
    * `Math.random()`: Cómo generar números aleatorios.
    * `document.createElement()`: Cómo crear un nuevo nodo HTML.
    * `element.style`: Cómo manipular estilos CSS con JavaScript.
    * `element.appendChild()`: Cómo añadir un nodo hijo a un elemento.
    * `element.textContent`: Para poner texto dentro de un elemento.
    * `EventTarget.addEventListener()`: Cómo manejar eventos de usuario como clics.
* **Mejores Prácticas**: Intenta separar la lógica de generación de datos (los colores) de la lógica de manipulación del DOM (crear y mostrar los elementos). Esto hará que tu código sea más limpio y fácil de mantener.
