document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    let inicialNombre = nombre.slice(0, 1).toLowerCase();
    let primerasLetrasApellido = apellido.slice(0, 3).toLowerCase();

    let numeroAleatorio = Math.floor(Math.random() * 90) + 10;

    let nombreUsuario = inicialNombre
        .concat(primerasLetrasApellido)
        .concat(numeroAleatorio);

    document.getElementById("resultado").textContent =
        "Tu nuevo nombre de usuario es: " + nombreUsuario;

    console.log("Tu nuevo nombre de usuario es: " + nombreUsuario);
});
