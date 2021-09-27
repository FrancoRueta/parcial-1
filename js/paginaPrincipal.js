
//Para setear el nombre del usuario debajo de la imagen.
document.getElementById('nombre-del-usuario').innerHTML = localStorage.getItem('nombre');
localStorage.removeItem('nombre');


//nos traemos los botones de + del dom.
const info1 = document.getElementById('info-1');
const info2 = document.getElementById('info-2');
const info3 = document.getElementById('info-3');

//evento para + nro 1
info1.addEventListener("click", (event) => {
    event.preventDefault();
    alert("INFORMACION DE PRODUCTO: \nNOMBRE:Alcohol alkofarma \nDESCUENTO DE: 50% \nUBICACION: Central Oeste - Ituzaingo \nVALIDO HASTA: 17/9");
  });
  

//evento para + nro 2
info2.addEventListener("click", (event) => {
    event.preventDefault();
    alert("INFORMACION DE PRODUCTO: \nNOMBRE:Lysoform \nDESCUENTO DE: 30% \nUBICACION: Farmacity - Moron \nVALIDO HASTA: 21/11");  });


//evento para + nro 3
info3.addEventListener("click", (event) => {
    event.preventDefault();
    alert("INFORMACION DE PRODUCTO: \nNOMBRE:Paracetamol pensa \nDESCUENTO DE: 25% \nUBICACION: Farmasol - Ramos Mejia \nVALIDO HASTA: 4/12");
  });


//traemos el boton de salida
const botonSalir = document.getElementById('salir')
botonSalir.addEventListener("click", (event) => {
    event.preventDefault();
    document.location.href = "index.html";
});


//traemos el carrito
const botonCarrito = document.getElementById('carrito')
botonCarrito.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Todavia no ha sido implementado... vuelva mas tarde")
});

//traemos el filtrar
const filtrarCarrito = document.getElementById('filtrar')
filtrarCarrito.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Todavia no ha sido implementado... vuelva mas tarde")
});

//traemos el ordenar
const ordenarCarrito = document.getElementById('ordenar')
ordenarCarrito.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Todavia no ha sido implementado... vuelva mas tarde")
});


//traemos el agregar
const agregarItem1 = document.getElementById('agregar1')
agregarItem1.addEventListener("click", (event) => {
    event.preventDefault();
    alert("¡El elemento se añadio al carrito!")
});

//traemos el agregar
const agregarItem2 = document.getElementById('agregar2')
agregarItem2.addEventListener("click", (event) => {
    event.preventDefault();
    alert("¡El elemento se añadio al carrito!")
});

//traemos el agregar
const agregarItem3 = document.getElementById('agregar3')
agregarItem3.addEventListener("click", (event) => {
    event.preventDefault();
    alert("¡El elemento se añadio al carrito!")
});