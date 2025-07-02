# Reto del Día 7: Validador de Formulario Básico

---

## Objetivo

Crea un formulario HTML simple con campos de entrada y un botón de envío. Implementa validaciones básicas utilizando JavaScript para asegurar que los datos ingresados por el usuario cumplan ciertos criterios antes de permitir el envío del formulario.

---

## Duración Estimada

3 - 5 horas

---

## Requisitos Funcionales

* El formulario debe incluir al menos los siguientes campos:
    * **Nombre de Usuario**: Un campo de texto.
    * **Email**: Un campo de texto.
    * **Contraseña**: Un campo de tipo `password`.
    * **Confirmar Contraseña**: Un segundo campo de tipo `password`.
* Debe haber un **botón de envío** (submit) para el formulario.
* Al intentar enviar el formulario (hacer clic en el botón de envío), se deben realizar las siguientes validaciones **antes** de que el formulario se envíe realmente:
    * **Nombre de Usuario**: No debe estar vacío y debe tener al menos 3 caracteres.
    * **Email**: No debe estar vacío y debe ser un formato de email válido (puedes usar una expresión regular simple o una verificación básica de la presencia de `@` y `.` ).
    * **Contraseña**: No debe estar vacía y debe tener al menos 6 caracteres.
    * **Confirmar Contraseña**: Debe coincidir exactamente con el campo de "Contraseña".
* Si alguna validación falla, se debe **mostrar un mensaje de error claro** al usuario para cada campo problemático (ej., debajo del campo o al lado).
* Si todas las validaciones son exitosas, el formulario **no debe recargarse**. Puedes mostrar un mensaje de éxito simple (ej., "Formulario enviado con éxito!") en algún lugar de la página o en la consola.

---

## Aspectos a Considerar y Preguntas Guía

### Manejo del Evento de Envío del Formulario

* ¿Qué evento debes escuchar en el formulario para interceptar el envío y evitar que se recargue la página si hay errores de validación?
* ¿Cómo puedes **prevenir el comportamiento por defecto** de un evento en JavaScript?

### Acceso y Validación de Valores del Formulario

* ¿Cómo obtendrás los valores de cada campo de entrada del formulario?
* ¿Qué métodos o propiedades de string usarías para verificar la longitud de los campos?
* Para el email, ¿qué puedes verificar para tener una validación básica de formato (no necesitas una regex super compleja si no quieres)?
* Para las contraseñas, ¿cómo compararías los valores de los dos campos?

### Retroalimentación al Usuario

* ¿Dónde y cómo mostrarías los mensajes de error para cada campo? (Pista: podrías tener un `<span>` vacío asociado a cada input).
* ¿Cómo harías para limpiar los mensajes de error cuando el usuario corrija un campo?
* ¿Cómo indicarías visualmente un campo válido vs. uno inválido (ej., cambiando el color del borde o del texto del mensaje de error)?

### Estructura del Código

* ¿Sería útil tener una función para validar cada campo individualmente?
* ¿Cómo combinarías los resultados de todas las validaciones para decidir si el formulario es válido en su conjunto?

---

## Tips y Consejos

* **Evento `submit`**: El formulario HTML tiene un evento `submit` que se dispara cuando el usuario intenta enviarlo.
* **`event.preventDefault()`**: Dentro del manejador del evento `submit`, puedes llamar a `event.preventDefault()` para detener el comportamiento predeterminado del navegador (que es recargar la página).
* **Acceder a campos de formulario**: Puedes acceder a los campos por su `id` (usando `document.getElementById()`) o si el formulario tiene un `id` (ej. `my-form`), podrías acceder a `document.getElementById('my-form').elements.nombreDelCampo`.
* **Validación de Email (simple)**: Una forma básica de verificar un email es asegurar que contenga `@` y que el `.` esté después del `@`. `String.prototype.includes()` o `String.prototype.indexOf()` pueden ser útiles.
    * Para una validación de email más robusta (opcional, pero útil para aprender): busca **`RegExp.prototype.test()`** y expresiones regulares para email. Una regex simple podría ser `/\S+@\S+\.\S+/`.
* **Vaciar mensajes de error**: Asegúrate de que, si un campo que antes tenía un error ahora es válido, su mensaje de error se borre. Podrías crear una función para mostrar y ocultar mensajes de error.
* **Retorno Booleano**: Las funciones de validación de campos individuales podrían retornar `true` si el campo es válido y `false` si no lo es. La función principal de validación del formulario sumaría estos booleanos.
* `console.log()`: Útil para verificar los valores de los campos y el resultado de tus validaciones.
* **Documentación Oficial**: Recurre a [MDN Web Docs](https://developer.mozilla.org/es/) para:
    * [`HTMLFormElement`](https://developer.mozilla.org/es/docs/Web/API/HTMLFormElement)
    * [`Event.preventDefault()`](https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault)
    * [`String.prototype.length`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/length)
    * [`String.prototype.includes()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes)