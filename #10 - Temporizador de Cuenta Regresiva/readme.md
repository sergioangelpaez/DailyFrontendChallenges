# Reto del Día 10: Temporizador de Cuenta Regresiva (Countdown Timer)

---

## Objetivo

Crea una aplicación web que permita al usuario establecer un tiempo (en minutos y segundos) y luego inicie una cuenta regresiva. La aplicación debe mostrar el tiempo restante en tiempo real y emitir una alerta o sonido cuando el temporizador llegue a cero.

---

## Duración Estimada

4 - 7 horas

---

## Requisitos Funcionales

* **Entrada de Tiempo**: El usuario debe poder ingresar los minutos y segundos deseados para la cuenta regresiva (ej., usando dos `<input type="number">` o un solo input y pidiendo un formato específico como `MM:SS`).
* **Botón de Inicio**: Un botón "Iniciar" para comenzar la cuenta regresiva.
* **Visualización del Tiempo**: El tiempo restante debe mostrarse de manera clara en formato `MM:SS` (Minutos:Segundos).
* **Actualización en Tiempo Real**: El temporizador debe actualizarse cada segundo.
* **Botón de Pausa/Reanudar**: Un botón que cambie de "Pausar" a "Reanudar" para controlar el temporizador.
* **Botón de Reiniciar**: Un botón "Reiniciar" para detener el temporizador y volver al tiempo inicial establecido por el usuario.
* **Fin del Temporizador**: Cuando el tiempo llega a `00:00`, la aplicación debe:
    * Detener la cuenta regresiva.
    * Mostrar un mensaje de "¡Tiempo terminado!" o similar.
    * Opcionalmente, emitir un sonido o vibrar (si es posible en el navegador).

---

## Aspectos a Considerar y Preguntas Guía

### Manejo del Tiempo en JavaScript

* ¿Cómo representarías el tiempo total de la cuenta regresiva en JavaScript (ej., en segundos)?
* ¿Qué función de JavaScript te permite ejecutar un bloque de código repetidamente en un intervalo de tiempo fijo (cada segundo)?
* ¿Qué función usarías para detener esa ejecución repetida?
* ¿Cómo convertirías el número total de segundos restantes a un formato `MM:SS` para mostrarlo al usuario? (Considera el relleno con ceros a la izquierda para minutos y segundos si son menores de 10).

### Lógica del Temporizador

* ¿Cómo harías para que el botón "Iniciar" se convierta en "Pausar" y viceversa?
* ¿Cómo guardarías el tiempo inicial establecido por el usuario para poder "Reiniciar" a ese valor?
* ¿Qué sucede si el usuario intenta iniciar el temporizador con un tiempo no válido (ej., vacío o cero)?

### Manipulación del DOM y Estado

* ¿Cómo seleccionarías los elementos para mostrar el tiempo, los botones y los inputs?
* ¿Cómo actualizarías el texto del tiempo cada segundo?
* ¿Cómo cambiarías el texto del botón de inicio/pausa?

---

## Tips y Consejos

* **`setInterval()` y `clearInterval()`**: Estas son las funciones clave para un temporizador. `setInterval(funcion, milisegundos)` ejecuta `funcion` cada `milisegundos`. `clearInterval(idDelIntervalo)` detiene esa ejecución.
* **Tiempo en Segundos**: Es más fácil manejar el tiempo internamente como un número total de segundos y luego convertirlo a `MM:SS` solo para la visualización.
    * Ejemplo de conversión a `MM:SS`:
        ```javascript
        let totalSeconds = 125; // 2 minutos y 5 segundos
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        // Para añadir un cero inicial si es necesario:
        let formattedMinutes = String(minutes).padStart(2, '0');
        let formattedSeconds = String(seconds).padStart(2, '0');
        let timeDisplay = `${formattedMinutes}:${formattedSeconds}`; // "02:05"
        ```
* **Variables de Estado**: Necesitarás variables para `tiempoRestanteEnSegundos`, `intervalId` (para guardar el ID que te devuelve `setInterval` y poder usar `clearInterval`), y `estadoDelTemporizador` (ej., 'inactivo', 'corriendo', 'pausado').
* **Manejo de Botones**: Un solo botón para "Iniciar" / "Pausar" simplifica la UI. Tendrás que cambiar su `textContent` y quizás su clase CSS.
* **Audio**: Para un sonido al finalizar, puedes crear un elemento `Audio` en JavaScript: `new Audio('ruta/a/tu/sonido.mp3').play();`. Para vibrar (en móviles), `navigator.vibrate([200, 100, 200]);`.
* **Validación de Entrada**: Asegúrate de que el usuario no pueda ingresar valores negativos o no numéricos.
* `console.log()`: Siempre útil para depurar el valor del tiempo restante y el estado del temporizador.
* **Documentación Oficial**: Recurre a [MDN Web Docs](https://developer.mozilla.org/es/) para `setInterval`, `clearInterval`, `Math.floor`, `String.prototype.padStart()`, `Audio API`, `navigator.vibrate`.