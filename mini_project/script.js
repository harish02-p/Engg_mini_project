  // Shop Registration Form Submission
  const registrationForm = document.getElementById('registrationForm');
  if (registrationForm) {
      registrationForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const shopName = document.getElementById('shopName').value;
          const ownerName = document.getElementById('ownerName').value;
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          const confirmPassword = document.getElementById('confirmPassword').value;

          if (password !== confirmPassword) {
              alert("Passwords do not match. Please try again.");
          } else {
              // Implement registration logic
              alert("Shop registered successfully!");
          }
      });
  }
  document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Perform registration logic (validate inputs, send data to server, etc.)
        // For simplicity, let's assume the registration is successful

        // Open a new tab and redirect to the page for adding products
        window.open("add-products.html", "_blank");

        // You can also use the following line to redirect in the same tab
        // window.location.href = "add-products.html";
    });
});

//add-products.html
document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById("productForm");
    const productList = document.getElementById("productList");

    productForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get product details from the form
        const productName = document.getElementById("productName").value;
        const productPrice = document.getElementById("productPrice").value;

        // Create a new list item to display the product details
        const listItem = document.createElement("li");
        listItem.textContent = `${productName} - ₹${productPrice}`;

        // Append the list item to the product list
        productList.appendChild(listItem);

        // Clear the form fields
        productForm.reset();
    });
});

//login signup 

function openTab(tabName) {
    var loginTab = document.getElementById("login");
    var signupTab = document.getElementById("signup");
    var loginTabBtn = document.getElementById("loginTabBtn");
    var signupTabBtn = document.getElementById("signupTabBtn");

    if (tabName === 'login') {
        loginTab.style.display = "block";
        signupTab.style.display = "none";
        loginTabBtn.classList.add("active");
        signupTabBtn.classList.remove("active");
    } else if (tabName === 'signup') {
        loginTab.style.display = "none";
        signupTab.style.display = "block";
        loginTabBtn.classList.remove("active");
        signupTabBtn.classList.add("active");
    }
}
