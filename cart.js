// cart.js

document.addEventListener("DOMContentLoaded", function() {
    var cartItemsElement = document.getElementById("cart-items");
    var cartTotalElement = document.getElementById("cart-total");
  
    // Obtener los productos del almacenamiento local
    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Mostrar los productos en el carrito
    cartItems.forEach(function(productId) {
      // Aquí puedes agregar la lógica para obtener la información del producto basado en su ID y mostrarlo en el carrito
  
      // Ejemplo: Mostrar solo el ID del producto
      var cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.textContent = "Product ID: " + productId;
      cartItemsElement.appendChild(cartItem);
    });
  
    // Calcular y mostrar el total de la compra
    var total = cartItems.length; // Aquí puedes calcular el total real en base a los precios de los productos
    cartTotalElement.textContent = total;
  });
  
  // Obtener los productos del carrito almacenados en localStorage
var cartItems = localStorage.getItem('cartItems');
if (cartItems) {
  cartItems = JSON.parse(cartItems);
} else {
  cartItems = [];
}

// Mostrar los productos en el carrito
var cartContainer = document.getElementById('cart-items');
for (var i = 0; i < cartItems.length; i++) {
  var product = cartItems[i];
  var productElement = document.createElement('div');
  productElement.textContent = product;
  cartContainer.appendChild(productElement);
}
