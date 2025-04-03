document.addEventListener("DOMContentLoaded", () => {
    fetch("/productos")
        .then(response => response.json())
        .then(data => mostrarProductos(data))
        .catch(error => console.error("Error cargando los productos:", error));
});

function mostrarProductos(productos) {
    const contenedor = document.querySelector(".productos");
    contenedor.innerHTML = "";

    productos.forEach(producto => {
        const productoHTML = `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2><a href="#">${producto.nombre}</a></h2>
                <p>${producto.descripcion}</p>
                <span class="precio">$${producto.precio}</span>
                <button class="agregar-carrito" data-id="${producto.id}">Agregar al carrito</button>
            </div>
        `;
        contenedor.innerHTML += productoHTML;
    });
}

