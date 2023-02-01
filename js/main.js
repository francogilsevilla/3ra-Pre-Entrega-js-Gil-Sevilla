const productos_html = document.getElementById('contenedor_productos');

const ver_carrito = document.getElementById('ver_carrito');

const modal_container = document.getElementById('modal_contenedor');

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
            imagen : producto.imagen,
            nombre: producto.nombre,
            precio: producto.precio,
        });
        console.log(carrito)
    });
});

ver_carrito.addEventListener("click", () =>{
    
    const modal_header = document.createElement('div')
    modal_header.className = 'modal_header'
    modal_header.innerHTML = `
        <h2 class="modal_tit">Carrito.</h2>
    `;
    modal_container.append(modal_header);
    const modal_boton = document.createElement('h3');
    modal_boton.innerText = 'x';
    modal_boton.className = "modal_boton";

    modal_header.append(modal_boton);

    carrito.forEach((producto)=>{
        let carrito_contenido = document.createElement('div');
        carrito_contenido.className = "modal-contenido";
        carrito_contenido.innerHTML = `
        <img src='${producto.imagen}'>
        <h3>${producto.nombre}</h3>
        <h4>$ ${producto.precio}</h4>
        `;
        modal_container.append(carrito_contenido)
    });

    const total = carrito.reduce((acc, el)=> acc + el.precio, 0);

    const total_compra = document.createElement('div')
    total_compra.className = "total_carrito"
    total_compra.innerHTML = `total a pagar: $${total}`;
    modal_container.append(total_compra);
});