// 1. Data Source array holding your product details
const products = [
    {
        id: 1,
        title: "Chairs",
        image: "images/1_page-0005.jpg",
        description: "<strong>1. Ergonomic Gaming Chairs</strong><br>These chairs are designed to provide optimal lumbar support, adjustable armrests, and headrests to promote correct posture during extended gaming sessions."
    },
    {
        id: 2,
        title: "Mouse",
        image: "images/1_page-0007.jpg",
        description: "<strong>2. Ergonomic Gaming Mice</strong><br>These devices are shaped to fit naturally in the user’s hand, reducing wrist tension. Features include adjustable sensitivity, programmable buttons, and lightweight design for precision and comfort."
    },
    {
        id: 3,
        title: "Set up",
        image: "images/1_page-0010.jpg",
        description: "<strong>3. Complete Ergonomic Setups</strong><br>Bundled packages that include chairs, desks, and accessories designed to work together for a fully optimised ergonomic gaming environment."
    }
];

// Get elements from the DOM
const productContainer = document.getElementById('product-container');
const searchInput = document.getElementById('searchInput');

// 2. Function to Render Products Dynamically onto the page
function renderProducts(itemsToDisplay) {
    // Clear out whatever is currently inside the container
    productContainer.innerHTML = '';

    // If search results are empty, show a message
    if (itemsToDisplay.length === 0) {
        productContainer.innerHTML = '<p style="text-align:center; width: 100%;">No products found matching your search.</p>';
        return;
    }

    // Loop through filtered or main items array and generate layout cards
    itemsToDisplay.forEach(item => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="Gallery">
                <a href="${item.image}" data-lightbox="MyGallery" data-title="${item.title}">
                    <img src="${item.image}" width="200" height="200" alt="${item.title}">
                </a>
            </div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        
        productContainer.appendChild(productCard);
    });
}

// 3. Search Filter event logic
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    // Filter array match conditions
    const filteredProducts = products.filter(product => {
        return product.title.toLowerCase().includes(searchTerm) || 
               product.description.toLowerCase().includes(searchTerm);
    });

    // Re-render only matching products
    renderProducts(filteredProducts);
});

// 4. Run the function automatically on page load to display all items initial state
renderProducts(products);