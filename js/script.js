
// Sticky navbar
window.addEventListener('scroll', ()=>{
  let navbar = document.querySelector(".navbar")
if (window.pageYOffset >= 300) {
  navbar.classList.add("sticky")
} else {
  navbar.classList.remove("sticky");
}
})
let bagItems = []
const onLoad = () => {
  displayItemsonHomePage()
  displayBagIcon()
}
// onLoad()
const addToBag = (itemId) => {
  bagItems.push(itemId)
  displayBagIcon()
};
const displayBagIcon =()=>{
  let bagItemCountElement = document.querySelector(".bag-item-count")
  console.log(bagItems.length)
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibilty = 'visible'
    bagItemCountElement.innerText = bagItems.length
  } else {
    bagItemCountElement.style.visibilty = 'hidden'
  }
}
const displayBagItem = () => {
  let bagItemCountElement = document.querySelector('.bag-item-count')
  bagItemCountElement.innerText = bagItems.length
  // bagItemCountElement.innerText = bagItems.length
  // if (bagItemCountElement.innerText == 0) {
  //   // bagItemCountElement.removeAttribute(".bag-item-count")
  //   bagItemCountElement.classList.remove(".bag-item-count")
  // } else {
  //   bagItemCountElement.innerText = bagItems.length
  // }
  // if (bagItems.length === 0) {
  //   bagItemCountElement.classList.remove(".bag-item-count")
  // }
}
const displayItemsonHomePage = () => {
  let itemsContainerElement = document.querySelector(".items-container");
  let innerHTML = ``;
  items.forEach((item) => {
    innerHTML += `
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
              <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
            </div>`;
  });
  itemsContainerElement.innerHTML = innerHTML;
};
displayItemsonHomePage()