
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
let innerHTML = ``
items.forEach(item => {
    innerHTML +=`
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
});
itemsContainerElement.innerHTML = innerHTML