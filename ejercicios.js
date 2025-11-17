// ============================================
// EJERCICIO 1: Calcular el área de un rectángulo
// ============================================
// La función debe retornar un valor, no hacer console.log()
// Llamaremos a la función dentro de un console.log()

function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

// Ejemplo de uso:
console.log("Ejercicio 1 - Área del rectángulo:", calcularAreaRectangulo(5, 3));


// ============================================
// EJERCICIO 2: Contar palabras en una cadena
// ============================================

function contarPalabras(cadena) {
    // Eliminar espacios al inicio y final, y dividir por espacios
    const palabras = cadena.trim().split(/\s+/);
    // Filtrar palabras vacías por si hay múltiples espacios
    return palabras.filter(palabra => palabra.length > 0).length;
}

// Ejemplo de uso:
console.log("Ejercicio 2 - Cantidad de palabras:", contarPalabras("Humahuaca es un lugar copado"));


// ============================================
// EJERCICIO 3: Contar vocales en una cadena
// ============================================

function contarVocales(cadena) {
    const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'A', 'E', 'I', 'O', 'U', 'Á', 'É', 'Í', 'Ó', 'Ú'];
    let contador = 0;
    
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }
    
    return contador;
}

// Alternativa más concisa usando expresiones regulares:
function contarVocalesRegex(cadena) {
    const matches = cadena.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/gi);
    return matches ? matches.length : 0;
}

// Ejemplo de uso:
console.log("Ejercicio 3 - Cantidad de vocales:", contarVocales("JavaScript"));


// ============================================
// EJERCICIO 4: Encontrar el palíndromo
// ============================================

function esPalindromo(cadena) {
    // Convertir a minúsculas y eliminar espacios y caracteres especiales
    const cadenaLimpia = cadena.toLowerCase().replace(/[^a-záéíóúñ]/g, '');
    // Comparar con su reverso
    const cadenaReversa = cadenaLimpia.split('').reverse().join('');
    return cadenaLimpia === cadenaReversa;
}

// Ejemplo de uso:
console.log("Ejercicio 4 - ¿Es palíndromo 'reconocer'?:", esPalindromo("reconocer"));
console.log("Ejercicio 4 - ¿Es palíndromo 'neuquen'?:", esPalindromo("neuquen"));


// ============================================
// EJERCICIO 5: Convertir edad de perro a años humanos
// ============================================
// Esta función NO debe devolver un valor sino mostrar por consola un mensaje

function convertirEdadPerro() {
    const edadHumana = prompt("Ingrese la edad del perro en años:");
    
    if (edadHumana === null || edadHumana === "") {
        console.log("No se ingresó una edad válida.");
        return;
    }
    
    const edadNumerica = parseFloat(edadHumana);
    
    if (isNaN(edadNumerica) || edadNumerica < 0) {
        console.log("Por favor, ingrese un número válido.");
        return;
    }
    
    const edadCanina = edadNumerica * 7;
    console.log(`La edad del perro en años humanos es: ${edadCanina} años`);
}

// Ejemplo de uso (descomentar para probar):
// convertirEdadPerro();


// ============================================
// EJERCICIO 6: Convertir la primera letra de cada palabra en mayúscula
// ============================================

function capitalizarPalabras(cadena) {
    return cadena.split(' ')
        .map(palabra => {
            if (palabra.length === 0) return palabra;
            return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
        })
        .join(' ');
}

// Ejemplo de uso:
console.log("Ejercicio 6 - Capitalizar palabras:", capitalizarPalabras("hola mundo javascript"));


// ============================================
// EJERCICIO 7: Generar los primeros N números de la sucesión de Fibonacci
// ============================================

function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const secuencia = [0, 1];
    
    for (let i = 2; i < n; i++) {
        secuencia[i] = secuencia[i - 1] + secuencia[i - 2];
    }
    
    return secuencia;
}

// Ejemplo de uso:
console.log("Ejercicio 7 - Fibonacci (10 primeros):", fibonacci(5));


// ============================================
// EJERCICIO 8: Lista de Productos
// ============================================

const productos = [
    { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
    { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
    { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
    { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
    { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

// 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio
console.log("Ejercicio 8.1 - Productos con nombre y precio:");
productos.forEach(producto => {
    console.log(`${producto.nombre}: $${producto.precio}`);
});

// 2. Usando map: Crear un array con solo los nombres de los productos
const nombresProductos = productos.map(producto => producto.nombre);
console.log("Ejercicio 8.2 - Array de nombres:", nombresProductos);

// 3. Usando filter: Obtener productos electrónicos con stock mayor a 20
const productosElectronicosStockAlto = productos.filter(producto => 
    producto.categoria === "electrónica" && producto.stock > 20
);
console.log("Ejercicio 8.3 - Productos electrónicos con stock > 20:", productosElectronicosStockAlto);

// 4. Usando find: Encontrar el producto con id 3
const productoId3 = productos.find(producto => producto.id === 3);
console.log("Ejercicio 8.4 - Producto con id 3:", productoId3);

// 5. Usando reduce: Calcular el valor total del inventario (precio * stock)
const valorTotalInventario = productos.reduce((total, producto) => {
    return total + (producto.precio * producto.stock);
}, 0);
console.log("Ejercicio 8.5 - Valor total del inventario:", valorTotalInventario);


// ============================================
// EJERCICIO 9: Estudiantes y Calificaciones
// ============================================

const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
    { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
    { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
    { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];
// 1. Usando forEach: Mostrar nombre y edad de cada estudiante
console.log("Ejercicio 9.1 - Nombre y edad de cada estudiante:");
estudiantes.forEach(estudiante => {
    console.log(`${estudiante.nombre}: ${estudiante.edad} años`);
});

// 2. Usando map: Crear array de objetos con nombre y promedio de calificaciones
const estudiantesConPromedio = estudiantes.map(estudiante => {
    const promedio = estudiante.calificaciones.reduce((suma, cal) => suma + cal, 0) / estudiante.calificaciones.length;
    return {
        nombre: estudiante.nombre,
        promedio: promedio
    };
});
console.log("Ejercicio 9.2 - Estudiantes con promedio:", estudiantesConPromedio);

// 3. Usando filter: Obtener estudiantes con promedio mayor a 7.5
const estudiantesPromedioAlto = estudiantes.filter(estudiante => {
    const promedio = estudiante.calificaciones.reduce((suma, cal) => suma + cal, 0) / estudiante.calificaciones.length;
    return promedio > 7.5;
});
console.log("Ejercicio 9.3 - Estudiantes con promedio > 7.5:", estudiantesPromedioAlto);

// 4. Usando find: Encontrar estudiante llamado 'María'
const estudianteMaria = estudiantes.find(estudiante => estudiante.nombre === 'María');
console.log("Ejercicio 9.4 - Estudiante llamado 'María':", estudianteMaria);

// 5. Usando reduce: Calcular la edad promedio de los estudiantes
const edadPromedio = estudiantes.reduce((suma, estudiante) => suma + estudiante.edad, 0) / estudiantes.length;
console.log("Ejercicio 9.5 - Edad promedio de los estudiantes:", edadPromedio);


// ============================================
// EJERCICIO 10: Películas
// ============================================

const peliculas = [
    { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
    { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
    { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
    { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
    { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

// 1. Usando forEach: Mostrar título y año de cada película
console.log("Ejercicio 10.1 - Título y año de cada película:");
peliculas.forEach(pelicula => {
    console.log(`${pelicula.titulo} (${pelicula.año})`);
});

// 2. Usando map: Crear array de títulos en mayúsculas
const titulosMayusculas = peliculas.map(pelicula => pelicula.titulo.toUpperCase());
console.log("Ejercicio 10.2 - Títulos en mayúsculas:", titulosMayusculas);

// 3. Usando filter: Obtener películas de drama con rating mayor a 8.5
const peliculasDramaRatingAlto = peliculas.filter(pelicula => 
    pelicula.genero === "drama" && pelicula.rating > 8.5
);
console.log("Ejercicio 10.3 - Películas de drama con rating > 8.5:", peliculasDramaRatingAlto);

// 4. Usando find: Encontrar película estrenada en 2014
const pelicula2014 = peliculas.find(pelicula => pelicula.año === 2014);
console.log("Ejercicio 10.4 - Película estrenada en 2014:", pelicula2014);

// 5. Usando reduce: Calcular la duración total de todas las películas
const duracionTotal = peliculas.reduce((total, pelicula) => total + pelicula.duracion, 0);
console.log("Ejercicio 10.5 - Duración total de todas las películas:", duracionTotal, "minutos");

