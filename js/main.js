const productos_html = document.getElementById('contenedor_productos');

const ver_carrito = document.getElementById('ver_carrito');

const carrito_contenedor = document.getElementById('carrito_contenedor');

let carrito = []

productos.forEach((producto)=>{
    let contenido = document.createElement('article');
    contenido.className = "tarjetas"
    contenido.innerHTML =`
    <h3 class="tarjetas_tit">${producto.nombre}</h3>
    <img class="tarjetas_img"src="${producto.imagen}">
    <h4 class="tarjetas_subtit">$ ${producto.precio}</h4>
    `

    productos_html.append(contenido);

    let agregar_al_carrito = document.createElement('button')
    agregar_al_carrito.className ="tarjetas_boton" 
    agregar_al_carrito.innerText = 'Agregar al carrito';

    contenido.append(agregar_al_carrito);

    agregar_al_carrito.addEventListener("click", ()=>{
        carrito.push({
            id : producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
        });
        console.log(carrito)
    });
});