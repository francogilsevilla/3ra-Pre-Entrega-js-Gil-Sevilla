const pintar_carrito = () => {
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

    modal_boton.addEventListener('click', () => {
        carrito_contenedor.style.display = "none";
    });


    modal_header.append(modal_boton);

    carrito.forEach((producto) => {
        let carrito_contenido = document.createElement('div');
        carrito_contenido.className = "contenedor_carrito"
        carrito_contenido.innerHTML = `
        <div class="carrito_tarjetas">
        <h3>${producto.nombre}</h3>
        <img class="carrito_img"src="${producto.imagen}">
        <h4>$ ${producto.precio}</h4>
        </div>
        `;
        carrito_contenedor.append(carrito_contenido);

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "eliminar_producto"
        carrito_contenido.append(eliminar);

        eliminar.addEventListener("click", eliminar_del_carrito);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const total_compra = document.createElement('div')
    total_compra.className = "total_carrito"
    total_compra.innerHTML = `total a pagar: $${total}`;
    carrito_contenedor.append(total_compra);
};

ver_carrito.addEventListener('click', pintar_carrito);

const eliminar_del_carrito = () => {
    const encontrar_id = carrito.find((element) => element.id);

    carrito = carrito.filter((carrito_id) => {
        return carrito_id !== encontrar_id;
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    pintar_carrito();
};