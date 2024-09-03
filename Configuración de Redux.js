const initialState = {
    cart: []
};

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Lógica para añadir al carrito
            break;
        case 'INCREMENT_ITEM':
            // Lógica para incrementar
            break;
        case 'DECREMENT_ITEM':
            // Lógica para decrementar
            break;
        case 'REMOVE_ITEM':
            // Lógica para remover
            break;
        default:
            return state;
    }
}

const store = Redux.createStore(cartReducer);

// Actions y dispatchers estarán en 'index.js'
