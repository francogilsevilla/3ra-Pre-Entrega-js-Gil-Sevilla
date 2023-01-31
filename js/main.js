const productos = [
    {
        id: 1,
        nombre: 'Gabinete ROG',
        precio: 20000,
        imagen: '../assets/image/gabinete_1.jpg'
    },
    {
        id: 2,
        nombre: 'Gabinete Redragon',
        precio: 15000,
        imagen: "../assets/image/gabinete_2.jpg"
    },
    {
        id: 3,
        nombre:'Placa Gtx 1660 ti',
        precio: 120000,
        imagen: "../assets/image/grafica_1.jpg"
    },
    {
        id: 4,
        nombre:'Placa Aourus 2090 8gb',
        precio: 220000,
        imagen: "../assets/image/grafica_2.jpg"
    },
    {
        id: 5,
        nombre:'Intel Core I5',
        precio: 35000,
        imagen: "../assets/image/micro_1.jpg"
    },
    {
        id: 6,
        nombre:'Intel core I3',
        precio: 60000,
        imagen: "../assets/image/micro_2.jpg"
    },
    {
        id: 7,
        nombre:'Placa Madre Asrock',
        precio: 15000,
        imagen: "../assets/image/placa_base_1.jpg"
    },
    {
        id: 8,
        nombre:'Placa Madre Gigabyte',
        precio: 10000,
        imagen: "../assets/image/placa_base_2.jpg"
    },
    {
        id: 9,
        nombre:'RAM Fury 8gb',
        precio: 24000,
        imagen: "../assets/image/ram_1.jpg"
    },
    {
        id: 10,
        nombre:'Ram Crucial 4gb',
        precio: 12000,
        imagen: "../assets/image/ram_2.jpg"
    },
    {
        id: 11,
        nombre:'Fuente Gigabyte 1000w 80plus',
        precio: 12000,
        imagen: "../assets/image/fuente_1.jpg"
    },
    {
        id: 12,
        nombre:'Fuente 750w 80 plus',
        precio: 5000,
        imagen: "../assets/image/fuente_2.jpg"
    }
];

let carrito = []

const contenedor_tarjetas = document.getElementById('contenedor_productos');


productos.forEach((producto => {
    const tarjeta_producto = document.createElement('article');
    tarjeta_producto.innerHTML = `
        <article class="tarjetas">
        <h3 class="tarjeta_h3">${producto.nombre}</h3>
        <img scr="${producto.imagen}" class="tarjetas_img">
        <h4 class="tarjeta_h4">${producto.precio}</h4>
        <button class="tarjeta_button">Agregar al carrito</button>
        </article>
    `;

    contenedor_tarjetas.append(tarjeta_producto);

}))