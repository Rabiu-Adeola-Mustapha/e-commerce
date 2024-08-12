// JavaScript code to fetch and display products

let API = "https://fakestoreapi.com/products";
let newArray = [];

// Fetching products from the API
fetch(API)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    newArray = data;
    rendPost();
  });

// Function to render products
function rendPost() {
  let ProductDisplay = document.getElementById("product-details");
  let displayPost = "";

  newArray.forEach((e, index) => {
    displayPost += `
        <div class="addProduct col-md-3">
            <div class="card">
                <div class="card-body">
                    <img class="thumbnail" src="${e.image}" alt="">
                    <h5 class="post-title mb-4">${e.title}</h5>
                    <btn class="post-body">${e.price}</btn>
                </div>
            </div>
        </div>
        `;
  });

  ProductDisplay.innerHTML = displayPost;
  addProduct();
}

// Function to add click event listeners to products
function addProduct() {
  let addProduct = document.querySelectorAll(".addProduct");
  addProduct.forEach((a, index) => {
    a.addEventListener("click", () => {
      console.log(index);
      localStorage.setItem("productId", newArray[index].id); // Ensure id is correct
      window.location.href = "product.html?productId=" + newArray[index].id; // Pass productId in URL
    });
  });
}

