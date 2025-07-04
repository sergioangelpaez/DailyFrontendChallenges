# Reto del Día 9: Aplicación de Quiz Básico

---

## Objetivo

Crea una aplicación interactiva donde los usuarios puedan responder una serie de preguntas de opción múltiple. La aplicación deberá mostrar una pregunta a la vez, permitir al usuario seleccionar una respuesta y, al final, mostrar su puntuación. **Debe incluir la posibilidad de reiniciar el quiz.**

---

## Duración Estimada

5 - 8 horas

---

## Requisitos Funcionales

* **Preguntas Predefinidas**: Define al menos 3-5 preguntas de opción múltiple en JavaScript (cada una con su pregunta, opciones de respuesta y la respuesta correcta).
* **Mostrar Pregunta Actual**: La aplicación debe mostrar una pregunta a la vez en la interfaz.
* **Opciones de Respuesta**: Las opciones de respuesta para la pregunta actual deben mostrarse como botones o elementos clickeables.
* **Navegación**:
    * Un botón "Siguiente Pregunta" para avanzar a la siguiente pregunta después de que el usuario haya seleccionado una respuesta.
    * **Al intentar avanzar sin una respuesta seleccionada, debe mostrar un mensaje de error.**
    * **Al seleccionar una respuesta, se debe indicar si es correcta o incorrecta (ej., cambiando el color de la opción seleccionada).**
    * **Después de seleccionar una respuesta, las opciones deben deshabilitarse para evitar cambios.**
* **Puntuación**: La aplicación debe llevar un registro de las respuestas correctas.
* **Resultado Final**: Al terminar todas las preguntas, en lugar de mostrar la siguiente pregunta, la aplicación debe mostrar la puntuación final del usuario (ej., "Has respondido 3 de 5 preguntas correctamente").
* **Reiniciar Quiz**: Un botón para reiniciar el quiz y empezar desde la primera pregunta.

---

## Aspectos a Considerar y Preguntas Guía

### Estructura de Datos para el Quiz

* ¿Cómo estructurarías tus preguntas en JavaScript? Un **array de objetos** es ideal, donde cada objeto represente una pregunta y contenga: `pregunta` (string), `opciones` (array de strings) y `respuestaCorrecta` (string o índice).
* ¿Cómo mantendrías un registro de la **pregunta actual** que se está mostrando y la **puntuación** del usuario?

### Manipulación Dinámica del DOM

* ¿Cómo actualizarías el texto de la pregunta y las opciones de respuesta cada vez que se avanza a una nueva pregunta?
* ¿Cómo crearías dinámicamente los botones o elementos para las opciones de respuesta?
* ¿Cómo mostrarías el resultado final y el botón de reiniciar?

### Lógica del Quiz

* ¿Cómo verificarías si la respuesta seleccionada por el usuario es la correcta?
* ¿Cómo actualizarías la puntuación basándote en la respuesta del usuario?
* ¿Cómo determinarías cuándo se han completado todas las preguntas?
* **¿Cómo aplicarías los estilos de "correcta" o "incorrecta" a la opción seleccionada inmediatamente?**
* **¿Cómo deshabilitarías las opciones después de una selección?**

### Manejo de Eventos

* ¿Qué eventos escucharías en las opciones de respuesta y en el botón "Siguiente Pregunta"?
* ¿Cómo manejarías el clic en una opción de respuesta para registrarla y dar feedback?
* ¿Cómo deshabilitarías las opciones de respuesta una vez que el usuario ha seleccionado una, antes de pasar a la siguiente pregunta?

---

## Tips y Consejos

* **Array de Objetos (Ejemplo)**:
    ```javascript
    const questions = [
        {
            question: "¿Cuál es la capital de Francia?",
            options: ["Berlín", "Madrid", "París", "Roma"],
            correctAnswer: "París"
        },
        {
            question: "¿Qué lenguaje se usa para estilizar páginas web?",
            options: ["Python", "JavaScript", "HTML", "CSS"],
            correctAnswer: "CSS"
        }
        // ... más preguntas
    ];
    ```
* **Variables de Estado**: Usa `let currentQuestionIndex = 0;` y `let score = 0;` para manejar el estado del quiz.
* **Función `displayQuestion()`**: Crea una función que tome el `currentQuestionIndex` y actualice el DOM para mostrar la pregunta y sus opciones.
* **Manejo de Clases CSS**: Para el feedback visual de respuestas correctas/incorrectas, define clases CSS como `.correct-answer` y `.wrong-answer`. Usa `classList.add()` y `classList.remove()`.
* **Deshabilitar Opciones**: Después de una respuesta, puedes deshabilitar los botones de opción (estableciendo el atributo `disabled` a `true` si usas botones, o `pointer-events: none;` en CSS si usas `div` o `span`) para evitar múltiples selecciones por pregunta.
* **Delegación de Eventos**: Para las opciones de respuesta, considera añadir un solo listener al contenedor padre de las opciones y usar `event.target` para identificar la opción clickeada.
* `console.log()`: Fundamental para depurar la lógica de puntuación y el flujo de preguntas.
* **Documentación Oficial**: Recurre a [MDN Web Docs](https://developer.mozilla.org/es/) para `document.createElement()`, `appendChild()`, `textContent`, `disabled` (para botones) y `classList`.