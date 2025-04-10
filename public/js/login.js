const loginStylesheet = document.createElement("link");
loginStylesheet.rel = "stylesheet";
loginStylesheet.href = "/style/login";
document.head.appendChild(loginStylesheet);

function crearModalLogin() {
    const modal = document.createElement("div");
    modal.id = "modal-login";
    modal.classList.add("modal");

    modal.innerHTML = `
        <div class="modal-contenido">
            <span class="cerrar">&times;</span>
            <h2>Iniciar Sesión</h2>
            <form id="login-form" class="form-login">
                <label for="usuario">Usuario:</label>
                <input type="text" id="usuario" class="form-login-input" required>
                
                <label for="password">Contraseña:</label>
                <input type="password" id="password" class="form-login-input" required>
                
                <button type="submit" class="form-login-btn">Ingresar</button>
                <a class="olv-pass" href="#">¿Has olvidado la Contraseña?</a>

                <div class="gsi-material-button" style="width:40">
                    <div class="gsi-material-button-state"></div>
                    <div class="gsi-material-button-content-wrapper">
                        <div class="gsi-material-button-icon">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block;">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                            <path fill="none" d="M0 0h48v48H0z"></path>
                        </svg>
                        </div>
                        <span class="gsi-material-button-contents">Sign in with Google</span>
                        <span style="display: none;">Sign in with Google</span>
                    </div>
                </div>

                <hr class="form-login-separador">
                <div class="register-center">
                    <a class="register-text" href="/register">Crear una cuenta</a>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
}

function mostrarPerfil(nombreUsuario) {
    linkLogin.style.display = "none";

    let perfilDiv = document.getElementById("perfil-usuario");
    if (perfilDiv) perfilDiv.remove();

    perfilDiv = document.createElement("div");
    perfilDiv.id = "perfil-usuario";
    perfilDiv.classList.add("perfil");
    perfilDiv.innerHTML = `
        <div class="perfil-icon">${nombreUsuario[0].toUpperCase()}</div>
    `;

    linkLogin.parentNode.insertBefore(perfilDiv, linkLogin.nextSibling);
}


document.addEventListener("DOMContentLoaded", () => {
    crearModalLogin();

    const modal = document.getElementById("modal-login");
    const btnLogin = document.querySelector(".login a");
    const btnCerrar = modal.querySelector(".cerrar");
    const loginForm = document.getElementById("login-form");

    const usuarioDB = {
        nombre: "admin",
        password: "1234"
    };

    btnLogin.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    });

    btnCerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const usuario = document.getElementById("usuario").value;
        const password = document.getElementById("password").value;
    
        if (usuario === usuarioDB.nombre && password === usuarioDB.password) {
            mostrarPerfil(usuario);
            modal.style.display = "none"; 
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });    
});
