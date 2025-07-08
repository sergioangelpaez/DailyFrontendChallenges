# Reto del Día 11: Validador de Contraseñas Complejo

---

## Objetivo

Crea una página web simple con un campo de entrada para contraseñas y un conjunto de reglas de validación. A medida que el usuario escribe, la aplicación debe mostrar dinámicamente qué reglas se cumplen y cuáles no.

---

## Duración Estimada

4 - 6 horas

---

## Requisitos Funcionales

* **Campo de Contraseña**: Un `<input type="password">` donde el usuario pueda escribir su contraseña.
* **Lista de Requisitos**: Una lista visible de requisitos para la contraseña (ej., un `<ul>` o un conjunto de `<span>`). Cada requisito debe indicar si se cumple o no.
* **Validación en Tiempo Real**: A medida que el usuario escribe en el campo de contraseña, la aplicación debe verificar y actualizar el estado de cada requisito al instante.
* **Al menos 5 Reglas de Validación**: Define un conjunto de reglas, por ejemplo:
    * Mínimo 8 caracteres.
    * Máximo 20 caracteres. 
    * Contiene al menos una letra mayúscula.
    * Contiene al menos una letra minúscula.
    * Contiene al menos un número.
    * Contiene al menos un carácter especial (ej., `!@#$%^&*()_+-=[]{};:'"|,.<>/?`).
* **Feedback Visual**: Cada requisito en la lista debe cambiar de estilo (ej., color verde/rojo, icono de marca de verificación/cruz) según se cumpla o no.
* **Mensaje de Éxito/Error Global (Opcional)**: Un mensaje general que indique "Contraseña segura" o "Contraseña débil" si todos los requisitos se cumplen o no.

---

## Aspectos a Considerar y Preguntas Guía

### Expresiones Regulares (RegEx)

* Este reto es una excelente oportunidad para practicar **Expresiones Regulares**. ¿Cómo usarías RegEx para verificar la presencia de mayúsculas, minúsculas, números y caracteres especiales?
* ¿Cómo verificarías la longitud de la cadena?

### Manipulación del DOM y Estilos

* ¿Cómo estructurarías el HTML para la lista de requisitos? Cada requisito probablemente necesitará su propio ID o una estructura que permita seleccionarlo fácilmente.
* ¿Cómo seleccionarías el campo de contraseña y la lista de requisitos?
* ¿Qué propiedad CSS o clases usarías para el feedback visual (verde/rojo)?

### Lógica de Validación

* ¿Cómo combinarías los resultados de cada verificación individual para determinar el estado general de la contraseña?
* ¿Cómo organizarías tu código para que sea legible y fácil de añadir nuevas reglas en el futuro? (Una función por regla, o un array de reglas con objetos, podría ser útil).

### Manejo de Eventos

* ¿Qué evento escucharías en el campo de contraseña para que la validación se realice en tiempo real a medida que el usuario escribe? (Pista: `input`).

---

## Tips y Consejos

* **Expresiones Regulares (RegEx) Básico**:
    * `/[A-Z]/.test(string)`: Verifica si `string` contiene al menos una letra mayúscula.
    * `/[a-z]/.test(string)`: Verifica si `string` contiene al menos una letra minúscula.
    * `/[0-9]/.test(string)` o `/\d/.test(string)`: Verifica si `string` contiene al menos un número.
    * `/[!@#$%^&*()_+\-=\[\]{};:'"|,.<>\/?]/.test(string)`: Verifica si `string` contiene al menos un carácter especial de la lista. **¡Cuidado con caracteres especiales en RegEx que deben ser escapados (`\-`, `\[`, `\]`, etc.)!**
    * `string.length >= 8`: Para la longitud mínima.
    * `string.length <= 20`: Para la longitud máxima.
* **Evento `input`**: Es el evento más adecuado para la validación en tiempo real, ya que se dispara con cada cambio en el valor del input.
* **Estructura de Funciones**: Puedes crear una función para cada regla de validación que reciba la contraseña como argumento y devuelva `true` o `false`. Luego, en tu función principal, llamas a todas estas funciones y actualizas el DOM.
* **Clases CSS**: Define clases como `.valid-rule` y `.invalid-rule` en tu CSS para aplicar los estilos de feedback visual. Luego, usa `element.classList.add()` y `element.classList.remove()`.
* `console.log()`: Tu mejor amigo para depurar las expresiones regulares y los resultados de las validaciones.
* **Recursos de RegEx**: Si las expresiones regulares son nuevas para ti, hay muchos tutoriales excelentes en línea. Puedes practicar en sitios como [RegExr](https://regexr.com/) o [Regexper](https://regexper.com/) para visualizarlas.