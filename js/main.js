// import Toastify from 'toastify-js';

const productos_html = (document.getElementById('contenedor_productos'));

const ver_carrito = document.getElementById('ver_carrito');

const carrito_contenedor = document.getElementById('carrito_contenedor');

const crear_formulario = document.getElementById('contenedor_formulario');

const enviar_datos = document.getElementById('boton_formulario');

const cantidad_carrito = document.getElementById('cantidad_carrito');

let carrito = [];

if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
};

productos.forEach((producto) => {
    let contenido = document.createElement('article');
    contenido.className = "tarjetas"
    contenido.innerHTML = `
    <h3 class="tarjetas_tit">${producto.nombre}</h3>
    <img class="tarjetas_img"src="${producto.imagen}">
    <h4 class="tarjetas_subtit">$ ${producto.precio}</h4>
    `

    productos_html.append(contenido);

    let agregar_al_carrito = document.createElement('button')
    agregar_al_carrito.className = "tarjetas_boton"
    agregar_al_carrito.innerText = 'Agregar al carrito';

    contenido.append(agregar_al_carrito);


    agregar_al_carrito.addEventListener("click", () => {
        
        const repetir = carrito.some((repetir_producto) => repetir_producto.id === producto.id);

        if (repetir){
            carrito.map((prod) => {
                if(prod.id === producto.id){
                    prod.cantidad++;
                }
            });
        }else{
            carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                imagen: producto.imagen,
                cantidad: producto.cantidad,
            });
        }

        carrito_contador();

        localStorage.setItem("carrito", JSON.stringify(carrito));
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se agrego el producto al carrito',
            showConfirmButton: false,
            timer: 750,
        });
    });
});



//toastify
// Toastify({
//     text: "Bienvenido a nuestra tienda",
//     duration: 5000,
// }).showToast();

// toastify({

//     text: "This is a toast",
    
//     duration: 3000
    
//     }).showToast();


// En proceso capturar datos de email y nombre

// enviar_datos.addEventListener('click' , () => {
//     let nombre = getElementById('nombre').value ;
//     let email = getElementById('email').value ;

//     document.value = nombre;
//     document.value = email;

//     localStorage.setItem('datos', JSON.stringify(enviar_datos))
// });