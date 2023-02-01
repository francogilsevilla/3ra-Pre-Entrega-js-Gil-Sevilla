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

ver_carrito.addEventListener("click", () =>{
    carrito_contenedor.innerHTML = " ";
    carrito_contenedor.style.display = "flex";
    
    const modal_header = document.createElement('div')
    modal_header.className = 'carrito_header'
    modal_header.innerHTML = `
        <h2 class="carrito_titulo">Carrito</h2>
    `;
    carrito_contenedor.append(modal_header);
    const modal_boton = document.createElement('h4');
    modal_boton.innerText = 'x';
    modal_boton.className = "carrito_boton";

    modal_boton.addEventListener('click', ()=>{
        carrito_contenedor.style.display = "none";
    });


    modal_header.append(modal_boton);

    carrito.forEach((producto)=>{
        let carrito_contenido = document.createElement('div');
        carrito_contenido.className = "contenedor_carrito"
        carrito_contenido.innerHTML = `
        <div class="carrito_tarjetas">
        <h3>${producto.nombre}</h3>
        <img class="carrito_img"src="${producto.imagen}">
        <h4>$ ${producto.precio}</h4>
        </div>
        `;
        carrito_contenedor.append(carrito_contenido)
    });

    const total = carrito.reduce((acc, el)=> acc + el.precio, 0);

    const total_compra = document.createElement('div')
    total_compra.className = "total_carrito"
    total_compra.innerHTML = `total a pagar: $${total}`;
    carrito_contenedor.append(total_compra);
});