document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");

  if (productId) {
    let API = `https://fakestoreapi.com/products/${productId}`;

    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Check if data is fetched correctly
        displayProduct(data);
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  } else {
    console.log("No product ID found in the URL.");
  }

  function displayProduct(product) {
    let ProductDisplay = document.getElementById("product-details");

    if (ProductDisplay) {
      let displayPost = `
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <img class="thumbnail" src="${product.image}" alt="">
                            <h5 class="post-title mb-4">${product.title}</h5>
                            <p class="post-body">${product.price}</p>
                        </div>
                    </div>
                </div>
            `;
      ProductDisplay.innerHTML = displayPost;
    } else {
      console.error('Element with id "product-details" not found.');
    }
  }
});
