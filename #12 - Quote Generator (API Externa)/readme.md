# Reto del Día 12: Visualizador de Cotizaciones Aleatorias (Quotes Generator)

---

## Objetivo

Crea una aplicación web que muestre citas (cotizaciones) famosas de forma aleatoria, obteniéndolas de una API externa. El usuario podrá solicitar una nueva cita con un clic, y la aplicación mostrará la cita y su autor.

---

## Duración Estimada

5 - 8 horas

---

## Requisitos Funcionales

* **Interfaz Simple**: Un título, un área para mostrar la cita (`<p>` o `<blockquote>`), un área para mostrar el autor (`<span>` o `<small>`), y un botón para "Generar Nueva Cita".
* **Obtención de Datos de API**: La aplicación debe **obtener citas de una API pública**. Sugerencias de APIs (puedes elegir una o buscar otra que prefieras, ¡asegúrate de que no requiera autenticación para empezar!):
    * [Quotable API](https://api.quotable.io/random) (Sencilla y recomendada para empezar. Devuelve `content` y `author`).
    * [Forismatic API](http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json) (Un poco más compleja, pero funciona).
    * [ZenQuotes API](https://zenquotes.io/api/random) (También muy sencilla).
* **Mostrar Cita Aleatoria**: Cada vez que el usuario haga clic en el botón, se debe hacer una nueva solicitud a la API y la cita y el autor se deben actualizar en la interfaz.
* **Manejo de Estados de Carga**: Mientras se obtiene la cita de la API (especialmente si hay un pequeño retraso), la aplicación debe mostrar un **indicador de carga** (ej., "Cargando...", un spinner o deshabilitar el botón).
* **Manejo de Errores**: Si la solicitud a la API falla por alguna razón (ej., problema de red, API no disponible), la aplicación debe mostrar un mensaje de error claro al usuario.
* **Diseño Responsivo (Opcional)**: Que la interfaz se vea bien en diferentes tamaños de pantalla.

---

## Aspectos a Considerar y Preguntas Guía

### Consumo de APIs (Fetch API)

* ¿Qué función nativa de JavaScript utilizarías para hacer peticiones HTTP a una API? (Pista: `fetch`).
* ¿Cómo manejarías la respuesta de la API? Las APIs suelen devolver datos en formato JSON. ¿Cómo convertirías esa respuesta en un objeto JavaScript utilizable?
* ¿Cómo manejarías las operaciones asíncronas (esperar la respuesta de la API) sin bloquear la interfaz de usuario? (Pista: `async/await` o `.then()`).

### Manipulación del DOM

* ¿Cómo seleccionarías los elementos donde se mostrará la cita y el autor?
* ¿Cómo actualizarías su `textContent` una vez que los datos de la API estén disponibles?
* ¿Cómo mostrarías y ocultarías el indicador de carga o los mensajes de error?

### Manejo de Eventos

* ¿Qué evento escucharías en el botón "Generar Nueva Cita"?

### Estados de la Aplicación

* ¿Cómo gestionarías los diferentes estados de la aplicación: **cargando**, **éxito** (cita mostrada), **error**? Piensa en qué elementos de la UI deben estar visibles o deshabilitados en cada estado.

---

## Tips y Consejos

* **`fetch()` API**:
    ```javascript
    async function getRandomQuote() {
        try {
            const response = await fetch('[https://api.quotable.io/random](https://api.quotable.io/random)');
            if (!response.ok) { // Verifica si la respuesta HTTP fue exitosa (código 200)
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json(); // Parsea el JSON de la respuesta
            console.log(data); // Aquí tendrías el objeto con la cita
            return data;
        } catch (error) {
            console.error('Error fetching quote:', error);
            throw error; // Propaga el error para que sea manejado más arriba
        }
    }
    ```
* **Manejo Asíncrono**: `async/await` hace que el código asíncrono se vea y se sienta más como código síncrono, lo que lo hace más fácil de leer y depurar.
* **`try...catch`**: Úsalo para capturar errores que puedan ocurrir durante la petición `fetch` o el procesamiento de la respuesta.
* **Actualización de UI en Estados**: Antes de `fetch`, muestra el spinner/mensaje de carga y deshabilita el botón. Después de un `fetch` exitoso, oculta el spinner y habilita el botón. En caso de error, muestra el mensaje de error y habilita el botón.
* **Propiedades de la API**: Cuando obtengas la respuesta JSON, asegúrate de saber qué propiedades contiene para acceder a la cita y al autor (ej., `data.content`, `data.author` para Quotable).
* **Mensajes de Error**: Utiliza un elemento del DOM (ej., un `<span>` o `<div>`) para mostrar mensajes de error al usuario.