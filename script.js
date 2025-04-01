document.addEventListener("DOMContentLoaded", () => {
    fetch("productos.json")
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
                <button>Agregar al carrito</button>
            </div>
        `;
        contenedor.innerHTML += productoHTML;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const modalLogin = document.getElementById("modal-login");
    const btnLogin = document.querySelector(".login a");
    const btnCerrar = document.querySelector(".cerrar");
    const loginForm = document.getElementById("login-form");

    btnLogin.addEventListener("click", (e) => {
        e.preventDefault();
        modalLogin.style.display = "flex";
    });

    btnCerrar.addEventListener("click", () => {
        modalLogin.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modalLogin) {
            modalLogin.style.display = "none";
        }
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const usuario = document.getElementById("usuario").value;
        const password = document.getElementById("password").value;

        const usuarioCorrecto = "admin";
        const passwordCorrecta = "1234";

        if (usuario === usuarioCorrecto && password === passwordCorrecta) {
            alert("Inicio de sesión exitoso");
            modalLogin.style.display = "none";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
});
