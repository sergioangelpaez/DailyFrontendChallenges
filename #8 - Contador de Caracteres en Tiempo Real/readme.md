# Reto del Día 8: Contador de Caracteres en Tiempo Real

---

## Objetivo

Crea una página web con un campo de texto (un `textarea`) donde el usuario pueda escribir. A medida que el usuario escribe, la aplicación debe mostrar en tiempo real el número de caracteres que ha ingresado y cuántos caracteres le quedan disponibles, con un límite máximo.

---

## Duración Estimada

2 - 4 horas

---

## Requisitos Funcionales

* La interfaz debe tener un **campo de texto de múltiples líneas (`<textarea>`)**.
* Debe haber un **límite máximo de caracteres** permitido para el `textarea` (ej., 100 o 200 caracteres, elige tú).
* Debajo del `textarea`, se debe mostrar un mensaje que indique:
    * El **número de caracteres actuales** ingresados.
    * Los **caracteres restantes** hasta el límite.
    * Ejemplo: "0 / 100 caracteres" o "15 caracteres, quedan 85".
* Este contador debe **actualizarse en tiempo real** a medida que el usuario escribe o borra texto.
* Si el usuario excede el límite de caracteres, el `textarea` **no debe permitir más entrada**. También puedes cambiar el color del contador para indicar que se ha alcanzado o superado el límite (ej., rojo).

---

## Aspectos a Considerar y Preguntas Guía

### Manejo del Evento de Entrada

* ¿Qué evento de JavaScript deberías escuchar en el `textarea` para detectar cada vez que el usuario escribe o borra un carácter?
* ¿Cómo obtendrías el texto actual del `textarea`?

### Lógica del Contador

* ¿Cómo calcularías la longitud actual del texto?
* ¿Cómo calcularías los caracteres restantes basándote en un límite predefinido?
* ¿Cómo evitarías que el usuario escriba más allá del límite? Piensa en cómo la longitud del texto se relaciona con el atributo `maxLength` del `textarea` o cómo puedes truncar el valor.

### Actualización de la Interfaz

* ¿Cómo seleccionarías el elemento del DOM donde mostrarás el contador?
* ¿Cómo actualizarías su `textContent` con los valores calculados?
* ¿Cómo cambiarías dinámicamente el estilo del contador (ej., color) cuando se alcance el límite?

### Estructura del Código

* ¿Necesitas alguna variable global?
* ¿Sería útil una función que se encargue de todo el proceso de "leer, calcular, actualizar UI"?

---

## Tips y Consejos

* **Atributo `maxLength`**: El elemento `<textarea>` tiene un atributo `maxLength` que puedes usar directamente en HTML para limitar la entrada de caracteres.
    * **Reflexión**: Si usas `maxLength` en HTML, ¿cómo afecta esto la lógica JavaScript para evitar que el usuario escriba más allá del límite? ¿Podrías simplemente usar `maxLength` y tu JS solo se encargaría de mostrar el contador, o aún necesitarías lógica extra en JS si `maxLength` no fuera suficiente por sí solo (por ejemplo, si quisieras un control más granular o diferente feedback)?
* **Evento `input`**: Este evento se dispara cada vez que el valor de un elemento `<input>` o `<textarea>` cambia debido a la entrada del usuario. Es ideal para actualizaciones en tiempo real.
* **`String.prototype.length`**: Para obtener la longitud de una cadena de texto.
* **`element.textContent` o `element.innerText`**: Para actualizar el contenido de texto de un elemento del DOM.
* **`element.style.color`**: Para cambiar el color de un elemento directamente con JavaScript.
* `console.log()`: Siempre útil para depurar y ver los valores de tu contador y el texto actual.
* **Documentación Oficial**: Recurre a [MDN Web Docs](https://developer.mozilla.org/es/) para:
    * [`HTMLTextAreaElement`](https://developer.mozilla.org/es/docs/Web/HTML/Element/textarea) y su atributo `maxLength`.
    * [`Event: input`](https://developer.mozilla.org/es/docs/Web/API/HTMLElement/input_event).
    * [`String.prototype.length`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/length).