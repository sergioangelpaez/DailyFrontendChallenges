# Reto del Día 3: Lista de Tareas (To-Do List) Básica

## Objetivo

Crea una aplicación web simple que permita a los usuarios agregar nuevas tareas a una lista. Las tareas deben mostrarse en la página una vez que se agregan.

## Duración Estimada

2 - 3 horas

## Requisitos Funcionales

* Debe haber un campo de entrada de texto (`input`) donde el usuario pueda escribir una nueva tarea.
* Debe haber un botón para "Agregar Tarea".
* Debajo del campo de entrada, debe haber una lista vacía donde se mostrarán las tareas.
* Al escribir texto en el campo de entrada y hacer clic en el botón "Agregar Tarea", el texto del campo de entrada debe aparecer como un nuevo elemento en la lista.
* Después de agregar una tarea, el campo de entrada de texto debe borrarse automáticamente para que el usuario pueda ingresar la siguiente tarea fácilmente.

---

## Aspectos a Considerar y Preguntas Guía

### Manipulación del DOM Avanzada

* ¿Cómo vas a crear un nuevo elemento de lista (`<li>` u otro) dinámicamente en JavaScript cada vez que se agrega una tarea?
* ¿Cómo vas a obtener el texto que el usuario escribe en el campo de entrada (`<input>`)? ¿Qué propiedad del elemento `input` necesitas leer?
* ¿Cómo vas a agregar este nuevo elemento de lista a la lista principal (`<ul>` o `<ol>`) en el DOM?
* Después de agregar la tarea, ¿cómo borras el contenido del campo de entrada?

### Manejo de Eventos

* ¿Qué evento vas a escuchar en el botón "Agregar Tarea"?
* Opcional pero recomendable: ¿Cómo podrías hacer para que la tarea también se agregue cuando el usuario presiona la tecla `Enter` en el campo de entrada, en lugar de solo hacer clic en el botón? Piensa en los eventos de teclado.

### Estructura del Código

* ¿Sería útil tener una función principal que encapsule toda la lógica de "agregar tarea" (obtener texto, crear elemento, añadir al DOM, borrar input)?
* ¿Cómo manejarías los casos en los que el campo de entrada esté vacío y el usuario intente agregar una tarea? ¿Debería permitirse agregar tareas vacías?

---

## Tips y Consejos

* **Creación de Elementos**: Recuerda que puedes crear cualquier elemento HTML con JavaScript. Busca `document.createElement()` en MDN.
* **Propiedades del Input**: Para leer el valor de un campo de entrada, la propiedad `value` es tu amiga. Para borrarlo, simplemente establece su `value` a una cadena vacía.
* **Encapsulamiento**: Es una buena idea que la lógica de añadir una tarea esté en una sola función que se llame cuando el botón es clickeado o la tecla `Enter` es presionada.
* **Depuración**: Sigue usando `console.log()` para verificar que estás obteniendo el valor correcto del `input` y que los nuevos elementos se están creando como esperas antes de añadirlos al DOM.
* **Documentación Oficial**: No dudes en consultar la [MDN Web Docs](https://developer.mozilla.org/es/) para cualquier función o propiedad que necesites:
    * `document.createElement()`: Para crear nuevos nodos HTML.
    * `Node.appendChild()`: Para añadir un nodo hijo a un elemento.
    * `HTMLInputElement.value`: Para obtener y establecer el valor de un campo de entrada.
    * `KeyboardEvent.key` o `KeyboardEvent.code`: Si intentas implementar la adición de tareas con la tecla `Enter`.