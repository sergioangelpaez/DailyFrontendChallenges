# Reto del Día 6: Galería de Imágenes Dinámica

---

## Objetivo

Crea una página web que muestre una colección de imágenes. La aplicación debe permitir al usuario ver una imagen grande y poder navegar entre las imágenes (siguiente y anterior) utilizando botones.

---

## Duración Estimada

3 - 5 horas

---

## Requisitos Funcionales

* La página debe mostrar una **imagen principal grande**.
* Debajo de la imagen principal, debe haber **dos botones**: uno para **"Imagen Anterior"** y otro para **"Imagen Siguiente"**.
* Al hacer clic en "Imagen Siguiente", la imagen principal debe **cambiar a la siguiente imagen** en una secuencia predefinida.
* Al hacer clic en "Imagen Anterior", la imagen principal debe **cambiar a la imagen anterior** en la secuencia.
* Cuando se llegue al final de la secuencia de imágenes al presionar "Siguiente", la galería debe **volver a la primera imagen** (comportamiento circular).
* Cuando se llegue al principio de la secuencia de imágenes al presionar "Anterior", la galería debe **volver a la última imagen** (comportamiento circular).
* Las imágenes pueden ser de tu elección, pero deben estar **almacenadas localmente** en tu proyecto o usar URLs de imágenes de prueba.

---

## Aspectos a Considerar y Preguntas Guía

### Gestión de Datos (Rutas de Imágenes)

* ¿Cómo almacenarías las rutas (URLs) de tus imágenes en JavaScript? Piensa en una **estructura de datos** adecuada para una colección ordenada de elementos.
* ¿Cómo mantendrías un registro de **cuál es la imagen actual** que se está mostrando? (Pista: un índice numérico podría ser muy útil).

### Manipulación del DOM y Atributos

* ¿Cómo seleccionarías el elemento `<img>` principal donde se mostrarán las imágenes?
* ¿Qué **atributo HTML** del elemento `<img>` necesitas cambiar para mostrar una nueva imagen?
* ¿Cómo actualizarías este atributo con la ruta de la imagen correcta?
* ¿Cómo seleccionarías los botones de "Siguiente" y "Anterior"?

### Lógica de Navegación Circular

* Cuando el índice de la imagen actual llegue al final de tu colección, ¿cómo lo "reiniciarías" para que apunte a la primera imagen? (Piensa en el **operador módulo `%`**).
* Cuando el índice llegue al principio (ej. `0`) y el usuario presione "Anterior", ¿cómo lo harías para que apunte a la última imagen?

### Manejo de Eventos

* ¿Qué eventos escucharías en los botones de navegación?

---

## Tips y Consejos

* **Array de Rutas**: Un **array de `strings`** (donde cada string es la ruta a una imagen) es una estructura de datos perfecta para este reto.
    ```javascript
    const imagePaths = [
        'images/img1.jpg',
        'images/img2.jpg',
        '[https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Imagen_3](https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Imagen_3)',
        // ... y así sucesivamente
    ];
    ```
* **Índice Actual**: Declara una variable, por ejemplo `let currentIndex = 0;`, para llevar el control de la imagen que se está mostrando.
* **Actualización del Atributo `src`**: Para cambiar la imagen mostrada, necesitas actualizar el atributo `src` del elemento `<img>`.
    * **Documentación Oficial**: Busca `HTMLImageElement.src` en [MDN Web Docs](https://developer.mozilla.org/es/docs/Web/API/HTMLImageElement/src).
* **Operador Módulo (`%`)**: Muy útil para la navegación circular "Siguiente". Por ejemplo, `(currentIndex + 1) % imagePaths.length` te dará el siguiente índice y automáticamente volverá a `0` cuando llegues al final.
* **Navegación "Anterior" Circular**: Para ir hacia atrás y envolverte al final, una estrategia común es: `(currentIndex - 1 + imagePaths.length) % imagePaths.length`. Asegura que el resultado de `currentIndex - 1` no sea negativo antes de aplicar el módulo.
* **Encapsula la Lógica**: Crea una función, por ejemplo `showImage(index)`, que se encargue de actualizar la imagen en el DOM basándose en el índice dado. Luego, tus funciones de "Siguiente" y "Anterior" solo tendrían que calcular el nuevo índice y llamar a `showImage()`.
* `console.log()`: Utilízalo para verificar el valor de `currentIndex` y la ruta de la imagen que intentas cargar en cada paso.