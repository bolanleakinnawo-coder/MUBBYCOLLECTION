const featuredProducts = [
  {
    name: "Mubby Collection Classic I",
    price: "₦285,000",
    category: "Dress Watch",
    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop",
  },
  {
    name: "Forest Diver Pro",
    price: "₦420,000",
    category: "Diver Watch",
    img: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=400&h=400&fit=crop",
  },
  {
    name: "Moss Chronograph",
    price: "₦560,000",
    category: "Chronograph",
    img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&h=400&fit=crop",
  },
  {
    name: "Canopy Tourbillon",
    price: "₦1,200,000",
    category: "Tourbillon",
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop",
  },
];

function renderFeaturedProducts() {
  const grid = document.getElementById("featuredproducts-grid");

  if (!grid) {
    console.error("Element with id 'featuredproducts-grid' not found!");
    return;
  }

  grid.innerHTML = featuredProducts
    .map(
      (product, index) => `
            <div class="product-card" style="animation-delay:${index * 0.1}s">
              <div class="card-img-wrap">
                <img src="${product.img}" alt="${product.name}" />
                <div class="card-overlay">
                  <span>Quick View</span>
                </div>
              </div>
              <div class="card-info">
                <span class="card-cat">${product.category}</span>
                <h3>${product.name}</h3>
                <div class="card-bottom">
                  <p class="card-price">${product.price}</p>
                  <button class="card-cart-btn">
                    <i class="fa-solid fa-bag-shopping"></i>
                  </button>
                </div>
              </div>
            </div>
          `,
    )
    .join("");
}

// Run when page loads
document.addEventListener("DOMContentLoaded", renderFeaturedProducts);
