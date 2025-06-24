# Reto del Día 2: Contador Simple

## Objetivo

Crea una página web sencilla que funcione como un contador básico. La aplicación debe mostrar un número que se incrementa al hacer clic en un botón y se decrementa al hacer clic en otro botón.

## Duración Estimada

1 - 2 horas

## Requisitos Funcionales

* La página debe mostrar un número inicial (ej. `0`).
* Debe haber **dos botones**: uno para incrementar el contador y otro para decrementarlo.
* Al hacer clic en el botón de incrementar, el número mostrado debe **aumentar en 1**.
* Al hacer clic en el botón de decrementar, el número mostrado debe **disminuir en 1**.
* El contador debe ser visible y fácil de leer.

---

## Aspectos a Considerar y Preguntas Guía

### Gestión del Estado (del Contador)

* ¿Dónde almacenarás el valor actual del contador en tu JavaScript?
* ¿Cómo te aseguras de que el valor del contador se actualice correctamente cada vez que se hace clic en un botón?

### Manipulación del DOM

* ¿Cómo seleccionas el elemento HTML donde se mostrará el número del contador?
* ¿Cómo actualizas el texto de ese elemento con el nuevo valor del contador?
* ¿Cómo seleccionas los botones de incrementar y decrementar?
* ¿Cómo asignas un "escuchador de eventos" (`event listener`) a cada botón para que respondan al clic?

### Estructura del Código

* ¿Sería útil tener funciones separadas para incrementar y decrementar el contador?
* ¿Cómo te aseguras de que la lógica de actualización del DOM se dispare cada vez que el valor del contador cambie?

---

## Tips y Consejos

* **Reutiliza conocimientos**: Los conceptos de selección de elementos del DOM, manejo de eventos (`addEventListener`) y actualización de `textContent` que aplicaste en el Reto del Día 1 serán cruciales aquí.
* `console.log()`: Úsalo para verificar el valor del contador en cada paso y asegurarte de que tus funciones están modificando la variable correctamente antes de actualizar el DOM.
* **Variable Global/Local**: Decide si tu variable del contador será global (accesible desde cualquier función) o si la manejarás de otra forma. Para este reto simple, una variable global es un buen punto de partida.
* **Documentación Oficial**: Si te encuentras atascado, la [MDN Web Docs](https://developer.mozilla.org/es/) es tu mejor amiga. Busca:
    * `EventTarget.addEventListener()`: Para manejar clics en ambos botones.
    * `document.getElementById()` o `document.querySelector()`: Para seleccionar el elemento del contador y los botones.
    * `element.textContent`: Para actualizar el número mostrado.