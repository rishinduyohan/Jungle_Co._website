const items = [
    { id: 1, name: "Desert Bloom", use: "Indoor Plants", price: "RS.15000", img: "assets/images/product-05-400x434.jpg",stars:"⭐⭐⭐⭐⭐" },
    { id: 2, name: "Golden Glow", use: "Indoor Plants", price: "Rs.21500", img: "assets/images/product-04-400x434.jpg",stars:"⭐⭐⭐" },
    { id: 3, name: "Silver Mist", use: "Indoor Plants", price: "Rs.26000", img: "assets/images/product-03-400x434.jpg",stars:"⭐⭐⭐⭐" },
    { id: 4, name: "Starlight Succulent", use: "Indoor Plants", price: "Rs.27200", img: "assets/images/product-02-400x432.jpg",stars:"⭐⭐⭐⭐⭐" },
    { id: 5, name: "Tropical Breeze", use: "Indoor Plants", price: "Rs.28500", img: "assets/images/steptodown.com839598.jpg",stars:"⭐⭐⭐" },
    { id: 6, name: "Zen Bamboo Grove", use: "Indoor Plants", price: "Rs.30000", img: "assets/images/product-01-400x434.jpg",stars:"⭐⭐⭐⭐⭐⭐" },
];
const container = document.getElementById('product-list');
if (container) {
    items.forEach(plants => {
        const card = document.createElement('div');
        card.className = 'col-sm-6 col-md-4 col-lg-4';
        card.innerHTML = `
            <a href="#" class="text-decoration-none">
            <div class="card border-0 shadow-sm">
                <img src="${plants.img}" class="card-img-top" alt="Desert Bloom" />
                <div class="card-body">
                    <h6 class="fw-bold">${plants.name}</h6>
                    <small class="text-muted">${plants.use}</small>
                    <p class="mb-1 fs-5">${plants.price}</p>
                    <div>${plants.stars}</div>
                </div>
            </div>
            </a>
        `;
        container.appendChild(card);
    });
}