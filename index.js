let cart = 0;

function addToCart(id) {
    cart += 1;
    document.getElementById('cart-count').innerText = cart;
    document.querySelector(`[onclick="addToCart(${id})"]`).disabled = true;
    // Añadir la planta al carrito usando Redux (state management)
}

// Redux store, reducers y actions estarán en 'redux.js'
