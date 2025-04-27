const addToCart = document.querySelector(".add_to_cart");
const addToWishlist = document.querySelector(".add_to_wishlist");
const cartBtn = document.querySelector(".cart");

cartBtn.addEventListener("click", () => {
  cartBtn.classList.add("pressed");
  cartBtn.classList.add("active");
  cartBtn.textContent = "Added to the cart";

  setTimeout(() => {
    cartBtn.disabled = true;
  }, 300);
});

addToCart.addEventListener("click", () => {
  if (addToCart.classList.contains("active")) {
    addToCart.classList.remove("active");
    addToCart.querySelector("i").className = "fas fa-cart-shopping";
    addToCart.querySelector("span").textContent = "Add to cart";
  } else {
    addToCart.classList.add("active");
    addToCart.querySelector("i").className = "fas fa-check";
    addToCart.querySelector("span").textContent = "Added to the cart";
  }
});

addToWishlist.addEventListener("click", () => {
  if (addToWishlist.classList.contains("active")) {
    addToWishlist.classList.remove("active");
    addToWishlist.querySelector("i").className = "far fa-heart";
    addToWishlist.querySelector("span").textContent = "Add to wishlist";
  } else {
    addToWishlist.classList.add("active");
    addToWishlist.querySelector("i").className = "fas fa-heart";
    addToWishlist.querySelector("span").textContent = "Added to the wishlist";
  }
});
