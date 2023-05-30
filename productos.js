// Event listener para los botones "Agregar al carrito"
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Función para agregar al carrito
function addToCart(event) {
    const productId = event.target.getAttribute('data-product-id');
    const productCard = event.target.closest('.product-card');
    const productTitle = productCard.querySelector('.product-title').textContent;
    const productPrice = productCard.querySelector('.product-price').textContent;

    const product = {
        id: productId,
        title: productTitle,
        price: productPrice
    };

    // Agregar el producto al carrito en el localStorage
    addToLocalStorage(product);

    // Mostrar una alerta o mensaje indicando que el producto se agregó al carrito (opcional)
    alert(`Producto ${productId} agregado al carrito.`);

    // Redireccionar a la página del carrito
    window.location.href = 'carrito.html';
}

// Función para agregar el producto al localStorage
function addToLocalStorage(product) {
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
