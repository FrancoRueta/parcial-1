//todos los elementos a traer del DOM.

const olvidoContrasenia = document.getElementById("olvido-password");
const botonLogin = documnet.getElementById("loginbutton");


//REGEX numerico.
const REGEX_COMPROBACION = new RegExp("/^\d+$/");


/*a. que valide mediante javascript solo números en el nombre de usuario (usa tu
DNI para probar)
b. que la contraseña tenga al menos 4 caracteres
c. que tenga un boton de ingresar que redirige al usuario a la “Página principal”*/


//click event para olvido contraseña
olvidoContrasenia.addEventListener("click", () => {
    alert("Que pena...");
  });


const inicioDeSesion = () => {
    let usuario = document.getElementById("usuario");
    let contrasenia = document.getElementById("password");

    //Si algo esta mal, tiramos alert y retornamos para cortar ejecucion.
    if(contrasenia.value.length < 5){
        alert("La contraseña debe ser de por lo menos 4 caracteres. Vuelva a intentar.");
        return;
    }
    if(REGEX_COMPROBACION.test(usuario.value) == false){
        alert("El usuario debe ser solamente numerico. Vuelva a intentar.")
        return;
    }

    document.location.href = "main";
}



//click event para validar los datos, y posteriormente acceder a la pagina.
botonLogin.addEventListener("click", () => {

})