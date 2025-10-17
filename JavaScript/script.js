

// ---------------------------
// 🔍 Product Search Function
// ---------------------------
function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const products = document.querySelectorAll(".product-card");

  products.forEach(card => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    const container = card.closest(".col-sm-6"); // column wrapper

    if (title.includes(input) || input === "") {
      container.style.display = "block";  // show product
    } else {
      container.style.display = "none";   // hide product
    }
  });
}

