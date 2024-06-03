
// Sticky navbar
window.addEventListener('scroll', ()=>{
    let navbar = document.querySelector(".navbar")
if (window.pageYOffset >= 300) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
})

let itemsContainerElement = document.querySelector(".items-container")

let item = {
    id: '001',
        image: 'images/1.jpg',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
}
itemsContainerElement.innerHTML = `
<div class="item-container">
          <img class="item-img" src="${item.image}" alt="${item.item_name}" srcset="" />
          <div class="rating">${item.rating.stars} * | ${item.rating.count}</div>
          <div class="company-name">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price-container">
            <span class="current-price">${item.current_price}</span>
            <span class="original-price">${item.original_price}</span>
            <span class="discount">${item.discount_percentage}</span>
          </div>
          <div class="btn-add-bag">Add to Bag</div>
        </div>`