

window.addEventListener('scroll', ()=>{
    let navbar = document.querySelector(".navbar")
if (window.pageYOffset >= 300) {
    navbar.classList.add("sticky")
    console.log("first")
    console.log(navbar)
  } else {
    navbar.classList.remove("sticky");
    console.log("second")
  }
})