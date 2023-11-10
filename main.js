let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.producto} - $${item.precio}`;
        listaCarrito.appendChild(li);
    });

    const totalCarrito = document.getElementById('total-carrito');
    totalCarrito.innerText = total;
}
