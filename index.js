const cartbtn = document.querySelectorAll(".cart-btn");

cartbtn.forEach((button) => {
  button.addEventListener("click", cartClick);
});

function cartClick() {
  let button = this;
  button.classList.add("clicked");
}
