// Initialize cart counter
let cartCount = 0;

// Get all "Add to cart" buttons
const addToCartButtons = document.querySelectorAll('.btn-outline-secondary');

// Update cart counter on button click
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++; // Increment cart count
        document.getElementById('cartCounter').textContent = `🛒 Cart: ${cartCount}`; // Update the display
        alert('Product added to cart!'); 
    });
});
