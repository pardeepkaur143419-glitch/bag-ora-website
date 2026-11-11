const products = [
    {
        name: "Classic Leather Handbag",
        price: 2499,
        category: "Handbags",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600"
    },
    {
        name: "Elegant Tote Bag",
        price: 1899,
        category: "Tote Bags",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600"
    },
    {
        name: "Stylish Travel Backpack",
        price: 1599,
        category: "Backpacks",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"
    },
    {
        name: "Luxury Shoulder Bag",
        price: 2999,
        category: "Shoulder Bags",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600"
    },
    {
        name: "Mini Fashion Handbag",
        price: 1299,
        category: "Handbags",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600"
    },
    {
        name: "Premium Tote Collection",
        price: 2199,
        category: "Tote Bags",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600"
    }
];

let cart = [];

function displayProducts(items) {
    const container = document.getElementById("product-list");

    container.innerHTML = items.map((product) => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price.toLocaleString("en-IN")}</p>
            <button onclick="addToCart('${product.name}')">
                Add to Cart
            </button>
        </div>
    `).join("");

    if (!items.length) {
        container.innerHTML = "<p>No products found.</p>";
    }
}

displayProducts(products);

// Add to Cart
function addToCart(name) {
    const product = products.find(p => p.name === name);
    cart.push(product);

    document.getElementById("cart-count").innerText = cart.length;

    alert(name + " added to cart!");
}

// Search
function searchProducts() {
    const value = document.getElementById("search")
        .value.toLowerCase();

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(value)
    );

    displayProducts(filtered);
}

// Category Filter
function filterCategory(category) {
    document.getElementById("collection")
        .scrollIntoView({ behavior: "smooth" });

    displayProducts(
        products.filter(p => p.category === category)
    );
}

// Login Modal
function showLogin() {
    document.getElementById("login-modal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("login-modal").style.display = "none";
}

// Cart Modal
function showCart() {
    const modal = document.getElementById("cart-modal");
    const container = document.getElementById("cart-items");

    modal.style.display = "flex";

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty!</p>";
    } else {
        container.innerHTML = cart.map((item, index) => `
            <div class="cart-row">
                <span>${item.name} - ₹${item.price}</span>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `).join("");
    }

    updateTotal();
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

function removeItem(index) {
    cart.splice(index, 1);
    document.getElementById("cart-count").innerText = cart.length;
    showCart();
}

function updateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    document.getElementById("total").innerText =
        "Total: ₹" + total.toLocaleString("en-IN");
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert("Please add products to your cart first!");
        return;
    }

    alert("Your order is ready! Connect backend to save your order.");

    cart = [];
    document.getElementById("cart-count").innerText = 0;
    showCart();
}

// Newsletter
function subscribe(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    alert("Thank you for subscribing: " + email);

    document.getElementById("email").value = "";
}