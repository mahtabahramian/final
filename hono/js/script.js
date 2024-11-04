let cart = [];

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clear the current cart display
    cartItemsContainer.innerHTML = '';

    // Calculate total price
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Total: $${totalPrice}`;
}

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if already in cart
        alert(`${existingProduct.name} has been added to the cart. Quantity: ${existingProduct.quantity}`);
    } else {
        product.quantity = 1; // Set initial quantity
        cart.push(product);
        alert(`${product.name} has been added to the cart. Quantity: ${product.quantity}`);
    }
    updateCartDisplay();
}

// Event listener for adding products to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const product = {
            id: productElement.getAttribute('data-id'),
            name: productElement.getAttribute('data-name'),
            price: parseFloat(productElement.getAttribute('data-price')),
        };
        addToCart(product);
    });
});