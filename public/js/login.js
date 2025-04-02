const modalLogin = document.createElement("div");
modalLogin.id = "modal-login";
modalLogin.classList.add("modal");

modalLogin.innerHTML = `
    <div class="modal-contenido">
        <span class="cerrar">&times;</span>
        <h2>Iniciar Sesión</h2>
        <form id="login-form">
            <label for="usuario">Usuario:</label>
            <input type="text" id="usuario" required>
            
            <label for="password">Contraseña:</label>
            <input type="password" id="password" required>
            
            <button type="submit">Ingresar</button>
            
            <p class="olv-pass">¿Has olvidado la Contraseña?</p>
            <a href="/register">Click Aquí</a>
        </form>
    </div>
`;

document.body.appendChild(modalLogin);

document.querySelector(".cerrar").addEventListener("click", () => {
    modalLogin.style.display = "none";
});

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
