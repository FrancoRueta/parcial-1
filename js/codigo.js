//todos los elementos a traer del DOM.

const olvidoContrasenia = document.getElementById('olvido-password');
const botonLogin = document.getElementById("iniciarSesion");


//funciones para chequear que el usuario y la contraseña sean validos.
const usuarioValido = num =>{
    return !isNaN(num)
}

let passValido = (pass) =>{
    return(pass.length > 3);
}


//click event para olvido contraseña
olvidoContrasenia.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Que pena...");
  });



//click event para validar los datos, y posteriormente acceder a la pagina.
botonLogin.addEventListener('click', (event) => {
    event.preventDefault();
    let usuario = document.getElementById("usuario").value;
    let contrasenia = document.getElementById("password").value;
    console.log(usuario);
    console.log(contrasenia);

    //Si algo esta mal, tiramos alert y retornamos para cortar ejecucion.
    if(! usuarioValido(usuario)){
        alert("ERROR: el usuario es invalido. Chequee que el usuario sea un DNI");
        return;
    }
    if(! passValido(contrasenia)){
        alert("ERROR:contraseña es invalida. Chequee que la contraseña sea de por lo menos 4 digitos.");
        return;
    }
    document.location.href = "main.html";
    localStorage.setItem('nombre', usuario);
    return;
});